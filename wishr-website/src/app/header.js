function headerController($scope, $rootScope, $log, auth) {
  $scope.loggedIn = function () {
    return auth.loggedIn();
  };

  $scope.logout = function () {
    auth.logout();
  };
}

module.exports = {
  template: require('./header.html'),
  controller: headerController
};
