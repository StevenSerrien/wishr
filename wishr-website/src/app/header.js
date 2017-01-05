function headerController($scope, $rootScope, $log, auth) {
  $scope.loggedIn = function () {
    return auth.loggedIn();
  };

  $scope.logout = function () {
    auth.logout();
  };

  $log.log($scope.loggedIn());
}

module.exports = {
  template: require('./header.html'),
  controller: headerController
};
