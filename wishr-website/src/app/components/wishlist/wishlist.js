function wishlistController(wish, $scope, $log, $stateParams) {

  this.text = 'My brand new component!';
  $log.log($stateParams.wishlistId);
  $scope.items = {};
  $scope.owner = {};
  $scope.wishlist = {};
  // $scope.items = wish.getItemsOnWishlist($stateParams.wishlistId);
  // $log.log($scope.items);  var rand = 0;
  $scope.getRandomSpan = function (max, min) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  };

  $scope.getItemsOnWishlist = function () {
    wish.getItemsOnWishlist($stateParams.wishlistId).then(function (results) {
      $log.log(results);
      $scope.wishlist = results[1];
      $scope.items = results[2];
      $scope.owner = results[0][0];
      $log.log($scope.owner);
      $log.log($scope.wishlist);
      $log.log($scope.items);
      for (var i = 0; i < $scope.items.length; i++) {
        $scope.items[i].colSpan = $scope.getRandomSpan(6, 6);
      }
      // $log.log($scope.items);
    });
  };

  $scope.getItemsOnWishlist();
}

module.exports = {
  templateUrl: 'app/components/wishlist/wishlist.html',
  controller: wishlistController
};
