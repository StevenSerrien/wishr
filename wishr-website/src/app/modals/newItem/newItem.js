function newItemController($scope, wish, $window) {
  this.text = 'My brand new component!';
  $scope.itemNew = {
    wname: '',
    wcategory: '',
    wurl: '',
    wprice: '',
    wphoto: ''
  };
  $scope.createNewItem = function () {
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
  templateUrl: 'app/modals/newItem/newItem.html',
  controller: newItemController
};
