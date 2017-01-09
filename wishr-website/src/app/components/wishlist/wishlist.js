function wishlistController(wish, $scope, $log, $stateParams) {
  this.text = 'My brand new component!';
  $log.log($stateParams.wishlistId);
  // $scope.items = wish.getItemsOnWishlist($stateParams.wishlistId);
  // $log.log($scope.items);

  $scope.getItemsOnWishlist = function () {
    wish.getItemsOnWishlist($stateParams.wishlistId).then(function (results) {
      $log.log(results);
    });
  };

  $scope.getItemsOnWishlist();
}

module.exports = {
  templateUrl: 'app/components/wishlist/wishlist.html',
  controller: wishlistController
};
