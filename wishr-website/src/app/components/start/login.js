function loginController($scope, auth, toastr, $location) {

  $scope.user = {};
  $scope.login = function () {
    auth.login($scope.user.email, $scope.user.password, function (result) {
      if (result === true) {
        $location.path('/dashboard');
      }
      else {
        toastr.error('Login failed.');
      }
    });
  };
}

module.exports = {
  templateUrl: 'app/components/start/login.html',
  controller: loginController
};
