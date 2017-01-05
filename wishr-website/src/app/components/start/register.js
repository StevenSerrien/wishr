module.exports = {
  templateUrl: 'app/components/start/register.html',
  controller: registerController
};

function registerController($scope, toastr, auth, $log) {
  $scope.user = {};

  $scope.register = function () {

    $log.log($scope.user);

    if ($scope.registerForm.$valid) {
        auth.register($scope.user.email, $scope.user.name, $scope.user.password);
    }
    else {
      toastr.error('There has been an error.');
    }
  };
}
