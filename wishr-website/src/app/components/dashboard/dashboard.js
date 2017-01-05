function dashboardController($scope, $log, $rootScope) {

  $scope.init = function () {
    $scope.user = angular.fromJson(localStorage.user);
    $log.log($scope.user);
  };

  $scope.init();
}
module.exports = {
  templateUrl: 'app/components/dashboard/dashboard.html',
  controller: dashboardController
};
