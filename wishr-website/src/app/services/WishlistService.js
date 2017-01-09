function WishlistService($http, $log, $rootScope, $q) {
  var service = this;

  service.getAllWishlistsFromCurrentUser = function () {
    if (localStorage.token) {
      $http({
        method: "GET",
        headers: {
          'Content-Type': undefined,
          'Authorization': 'Bearer ' + localStorage.token
        },
        url: $rootScope.BASE_URL + "/wishlist"
      }).then(function mySucces(response) {
        $log.log(response.data);
        return angular.toJson(response.data);
      }, function myError(response) {
        $log.log(response);
      });
    }
  };
  var results;
  service.getAllWishlists = function () {
    if (!results) {
    // Create deferred object
    var deferred = $q.defer();
    $http({
      method: 'GET',
      headers: {
        'Content-Type': undefined,
        'Authorization': 'Bearer ' + localStorage.token
      },
      url: $rootScope.BASE_URL + "/wishlist"
    }).then(function successCallback(response) {
      results = response.data;
      deferred.resolve(results);
    }, function errorCallback(error) {
      results = error;
      deferred.reject(error);
    });
    results = deferred.promise;
    }
    return $q.when(results);
  };

  service.storeWishlist = function (wname, callback) {
    if (localStorage.token) {
      $log.log('Voorbij');
      $http({
        method: "POST",
        headers: {
          'Authorization': 'Bearer ' + localStorage.token
        },
        data: {
          name: wname
        },
        url: $rootScope.BASE_URL + "/wishlist/store"
      }).then(function mySucces(response) {
        callback(true);
      }, function myError(response) {
        callback(false);
      });
    }
  };

  var items;
  service.getItemsOnWishlist = function (id) {
    if (!items) {
    // Create deferred object
    var deferred = $q.defer();
    $http({
      method: 'GET',
      headers: {
        'Content-Type': undefined,
        'Authorization': 'Bearer ' + localStorage.token
      },
      url: $rootScope.BASE_URL + "/item/show/" + id
    }).then(function successCallback(response) {
      items = response.data;
      deferred.resolve(items);
    }, function errorCallback(error) {
      results = error;
      deferred.reject(error);
    });
    items = deferred.promise;
    }
    return $q.when(items);
  };
}

module.exports = WishlistService;
