function dashboardController($scope, $log, $rootScope, $timeout, wish, $uibModal, $state) {
$scope.user = {};
$scope.wishlists = {};
$scope.wishlistNew = {
  wname: ''
};

$scope.getWishlists = function () {
  wish.getAllWishlists().then(function (results) {
    $scope.wishlists = results;
    $log.log($scope.wishlists);
  });
};

$scope.makeNewWishlist = function () {
  $log.log("Clickie");
  wish.storeWishlist($scope.wishlistNew.wname, function (result) {
  });
  $state.reload();
};

$scope.openModalNewWishlist = function () {
  $uibModal.open({
    template: `<div class="col-lg-12">
      <div class="yellow-form new-wishlist normal relative">
        <form name="wishlistForm" ng-submit="$scope.makeNewWishlist()" class='relative'>
        <h1 class="text-center">Alright! Let's make a new one.</h1>
        <div class="group center" ng-class="{ 'has-error' : wishlistForm.wname.$invalid && !wishlistForm.email.$pristine }" >
          <input class="inputMaterial center" name='wname' type="text" ng-model="wishlistNew.wname" placeholder="" ng-minlength="3" required>
          <span class="highlight center"></span>
          <span class="bar center"></span>
          <label class='center'>Name for your new wishlist.</label>
        </div>
        <div class="col-xs-12">
          <img class='center' ng-if="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          <button type="submit" ng-disabled="wishlistForm.$invalid" class='button type-2 register'>Create it!</button>
        </div>
        </form>
      </div>
    </div>`
  });
};
$scope.getWishlists();
init();

function init() {
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
