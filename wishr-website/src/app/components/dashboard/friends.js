function friendsController($scope, $http, $rootScope, $log, $q) {
  this.text = 'My brand new component!';
  $scope.text = 'hallo';
  $scope.users = {};

  $scope.getItemsOnWishy = function (id) {
    $http({
      method: 'GET',
      headers: {
        'Content-Type': undefined,
        'Authorization': 'Bearer ' + localStorage.token
      },
      url: $rootScope.BASE_URL + "/wishlist/show/" + id
    }).then(function successCallback(response) {
      $log.log(response.data);
      return response.data;
    }, function errorCallback(error) {
      $log.log(error);
    });
  };

  var wishlists;
  $scope.getItemsOnWishyy = function (id) {
    if (!wishlists) {
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
      wishlists = response.data;
      deferred.resolve(wishlists);
    }, function errorCallback(error) {

      deferred.reject(error);
    });
    wishlists = deferred.promise;
    }
    return $q.when(wishlists);
  };

  $scope.getAllUsers = function () {
    $http({
      method: 'GET',
      headers: {
        'Content-Type': undefined,
        'Authorization': 'Bearer ' + localStorage.token
      },
      url: $rootScope.BASE_URL + "/getusers"
    }).then(function successCallback(response) {

      $scope.users = response.data.users;
      for (var i = 1; i < $scope.users.length; i++) {
        // $scope.users[i].wishlists = $scope.getItemsOnWishy(i);

      }
      // $log.log($scope.users);
    }, function errorCallback(error) {
      $log.log(error);
    });
  };
  $scope.getItemsOnWishyy(13).then(function (result) {
    $scope.test = result;
    $log.log(result);
  });
  $log.log($scope.test);
  $scope.getAllUsers();

}

module.exports = {
  templateUrl: 'app/components/dashboard/friends.html',
  controller: friendsController
};
