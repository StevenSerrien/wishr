function WishlistService($http, $log, $rootScope) {
  var service = this;

  service.getAllWishlistsFromCurrentUser = function (callback) {
    if (localStorage.token) {
      $http({
        method: "GET",
        headers: {
          'Content-Type': undefined,
          'Authorization': 'Bearer ' + localStorage.token
        },
        url: $rootScope.BASE_URL + "/wishlist"
      }).then(function mySucces(response) {
        $log.log(response);
      }, function myError(response) {
        $log.log(response);
      });
    }
  };
}

module.exports = WishlistService;
