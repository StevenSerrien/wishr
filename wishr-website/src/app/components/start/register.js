module.exports = {
  templateUrl: 'app/components/start/register.html',
  controller: registerController
};

function registerController($scope, toastr, auth, $log, $location) {
  $scope.user = {};

  $scope.register = function () {

    $log.log($scope.user);

    if ($scope.registerForm.$valid) {
      $scope.loading = true;
        auth.register($scope.user.email, $scope.user.name, $scope.user.password, function (result) {
          if (result === true) {
            auth.loggedIn();
            $location.path('/dashboard');
          }
          else {
            toastr.error('Email already exists.');
            $scope.loading = false;
          }
        });
    }
    else {
      toastr.error('There has been an error.');
    }
  };
}
