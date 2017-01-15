function newItemController($scope, wish, $window, $log, $http, $rootScope, $stateParams) {
  this.text = 'My brand new component!';
  $scope.itemNew = {
    wname: '',
    wcategory: '',
    wurl: '',
    wprice: '',
    wphoto: '',
    wrating: '5'
  };
  $scope.createNewItem = function () {
    $log.log($stateParams.wishlistId);
    $log.log($scope.itemNew);
    if (localStorage.token) {
      $log.log('Is ingelogd.');
      $http({
        method: "POST",
        url: $rootScope.BASE_URL + "/item/store/" + $stateParams.wishlistId,
        headers: {
          'Content-Type': undefined,
          'Authorization': 'Bearer ' + localStorage.token
        },
        data: {
          name: $scope.itemNew.wname,
          category: $scope.itemNew.wcategory,
          url: $scope.itemNew.wurl,
          price: $scope.itemNew.wprice,
          rating: '5',
          photo: $scope.itemNew.wphoto
        },
        transformRequest: function (data, headersGetter) {
        var formData = new FormData();
        angular.forEach(data, function (value, key) {
          formData.append(key, value);
        });
        return formData;
        }
      }).then(function mySucces(response) {
        $log.log('Opgeslagen');
      }, function myError(response) {
        $log.log(response);

      });
    }

  };
}
module.exports = {
  templateUrl: 'app/modals/newItem/newItem.html',
  controller: newItemController
};
