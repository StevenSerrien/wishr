function headerController($scope, $rootScope, $log, auth) {
  $scope.loggedIn = function () {
    return auth.loggedIn();
  };

  $log.log($scope.loggedIn());
}

module.exports = {
  template: require('./header.html'),
  controller: headerController
};
