function dashboardController($scope, $log, $rootScope, $timeout, wish) {
$scope.user = {};

init();
function init() {
  $timeout(function () {
    $scope.user = angular.fromJson(localStorage.user);
    $log.log($scope.user);
  }, 100);

  wish.getAllWishlistsFromCurrentUser();
}

}
module.exports = {
  templateUrl: 'app/components/dashboard/dashboard.html',
  controller: dashboardController
};
