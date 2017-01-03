function AuthenticationService($http, $rootScope, $log) {
  var service = this;

  service.register = function (email, username, password) {
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
        $log.log('Gelukt.');

    }, function error() {
        $log.log('Niet gelukt.');
    });
  };

  service.login = function (email, password) {
    $http({
      method: "POST",
      url: $rootScope.BASE_URL + "api/auth/login",
      data: {
        email: email,
        password: password
      }
    }).then(function success(response) {
        localStorage.setItem("token", response.data.token);
        $log.log('Gelukt.');

        // Setting the userobject in localstorage
        service.getUserData();
        $log.log("User logged in? - " + service.loggedIn());
    }, function error() {
        $log.log('Niet gelukt.');
    });
  };

  service.getUserData = function () {
    $log.log('getUserData Aangeroepen.');
    if (localStorage.token) {
      $http({
        method: "GET",
        url: $rootScope.BASE_URL + "api/auth/user?token=" + localStorage.token
      }).then(function mySucces(response) {
        $log.log("Userobject:" + angular.toJson(response.data.user));
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
  };
}

module.exports = AuthenticationService;
