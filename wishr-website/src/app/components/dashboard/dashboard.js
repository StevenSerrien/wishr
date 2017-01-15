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
      // $log.log(response.data[1]);
      $log.log(response.data.wishlists);
      if (response.data[1]) {
        $log.log('isset-2');
        $scope.wishlists = response.data[1];
        if ($scope.wishlists.length >= 0) {
          $scope.wishlistsAvailable = true;
        }
      }
      if (response.data.wishlists) {
        $log.log('isset-1');
        $scope.wishlists = response.data.wishlists;
        if ($scope.wishlists.length >= 0) {
          $scope.wishlistsAvailable = true;
        }
      }
      // $scope.wishlists = response.data.wishlists;
      // if ($scope.wishlists.length >= 0) {
      //   $scope.wishlistsAvailable = true;
      // }
      return angular.toJson(response.data[1]);
    }, function myError(response) {
      $scope.wishlistsAvailable = false;
      $log.log(response);
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
