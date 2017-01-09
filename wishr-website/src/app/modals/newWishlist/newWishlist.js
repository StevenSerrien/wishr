function newWishlistController($scope, $log, wish, $state, $location, $window) {
  this.text = 'My brand new component!';
  $scope.wishlistNew = {
    wname: ''
  };

  $scope.createNewWishlist = function () {
    wish.storeWishlist($scope.wishlistNew.wname, function (result) {
      if (result === true) {
        // $scope.test();
        // $scope.pscope.test();
        $window.location.href = '/dashboard';
      }
      else {
      }
    });
  };
}

module.exports = {
  templateUrl: 'app/modals/newWishlist/newWishlist.html',
  controller: newWishlistController
};
