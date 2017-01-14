function dashboardController($scope, $log, $rootScope, $timeout, wish, $uibModal, $state, $http) {
$scope.user = {};
$scope.wishlists = {};
$scope.wishlistsAvailable = false;

$scope.getWishlists = function () {
  wish.getAllWishlists().then(function (results) {
    $scope.wishlists = results.wishlists;
    $log.log($scope.wishlists);
  });
};

$scope.getWishes = function () {
  if (localStorage.token) {
    $http({
      method: "GET",
      headers: {
        'Content-Type': undefined,
        'Authorization': 'Bearer ' + localStorage.token
      },
      url: $rootScope.BASE_URL + "/wishlist"
    }).then(function mySucces(response) {
      $log.log(response.data.wishlists);
      $scope.wishlists = response.data.wishlists;

      if ($scope.wishlists.length >= 0) {
        $scope.wishlistsAvailable = true;
      }
      return angular.toJson(response.data);
    }, function myError(response) {
      $scope.wishlistsAvailable = false;
      // $log.log(response);
    });
  }
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
// $scope.getWishlists();
$scope.wishlists = $scope.getWishes();
// $log.log($scope.wishlists);
init();

function init() {
  $scope.wishlistsAvailable = false;
  $log.log($scope.wishlistsAvailable);
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
