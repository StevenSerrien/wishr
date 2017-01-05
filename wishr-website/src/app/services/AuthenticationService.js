function AuthenticationService($http, $rootScope, $log, toastr, $location) {
  var service = this;

  service.register = function (email, username, password, callback) {
    $http({
      method: "POST",
      url: "http://wishr-backend.dev/api/auth/signup",
      data: {
        email: email,
        password: password,
        name: username
      }
    }).then(function success(response) {
        localStorage.setItem("token", response.data.token);
        service.getUserData();

        // add jwt token to auth header for all requests made by the $http service
        $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;

        // execute callback with true to indicate successful register
        callback(true);

    }, function error() {
        toastr.error('This email already exists.');
        service.loggedIn();
        callback(false);
    });
  };

  service.login = function (email, password, callback) {
    $http({
      method: "POST",
      url: $rootScope.BASE_URL + "/auth/login",
      data: {
        email: email,
        password: password
      }
    }).then(function success(response) {
        localStorage.setItem("token", response.data.token);
        $log.log('Gelukt.');

        // Setting the userobject in localstorage
        service.getUserData();
        // execute callback with true to indicate successful login
        callback(true);
    }, function error() {
      // execute callback with true to indicate failed login
        callback(false);
    });
  };

  service.getUserData = function () {
    $log.log('getUserData Aangeroepen.');
    if (localStorage.token) {
      $http({
        method: "GET",
        url: $rootScope.BASE_URL + "/auth/user?token=" + localStorage.token
      }).then(function mySucces(response) {
        // $log.log("Userobject:" + angular.toJson(response.data.user));
        localStorage.setItem('user', angular.toJson(response.data.user));
      }, function myError(response) {
        $log.log(response);
      });
    }
  };

  // Function to check if someone is logged in.
  service.loggedIn = function () {
    if (localStorage.token) {
      return true;
    }
    else
    {
      return false;
    }
  };

  // Function to logout by removing localstorage.token
  service.logout = function () {
    localStorage.clear();
    $location.path('/');
  };
}

module.exports = AuthenticationService;
