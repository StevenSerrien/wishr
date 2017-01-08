function dashboardController($scope, $log, $rootScope, $timeout, wish) {
$scope.user = {};
$scope.wishlists = {};

$scope.getWishlists = function () {
  wish.getAllWishlists().then(function (results) {
    $scope.wishlists = results;
    $log.log($scope.wishlists);
  });
};
$scope.getWishlists();
init();

function init() {
  $timeout(function () {
    $scope.user = angular.fromJson(localStorage.user);
    $log.log($scope.user);
    // $log.log($scope.wishlists);
  }, 100);
}
}
module.exports = {
  templateUrl: 'app/components/dashboard/dashboard.html',
  controller: dashboardController
};
