function dashboardController($scope, $log, $rootScope, $timeout, wish, $uibModal, $state) {
$scope.user = {};
$scope.wishlists = {};

$scope.getWishlists = function () {
  wish.getAllWishlists().then(function (results) {
    $scope.wishlists = results.wishlists;
    $log.log($scope.wishlists);
  });
};

$scope.openModalNewWishlist = function () {
  $scope.test = function () {
    $log.log('test');
  };
  $uibModal.open({
       component: 'mWishlist',
       pscope: $scope
  });
};
$scope.getWishlists();
init();

$scope.test = function () {
  $log.log('test');
};

function init() {
  $timeout(function () {
    $scope.user = angular.fromJson(localStorage.user);
    $log.log($scope.user);
    // $log.log($scope.wishlists);
  }, 500);
}
}
module.exports = {
  templateUrl: 'app/components/dashboard/dashboard.html',
  controller: dashboardController
};
