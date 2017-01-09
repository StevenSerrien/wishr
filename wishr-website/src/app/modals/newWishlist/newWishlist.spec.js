var angular = require('angular');
require('angular-mocks');
var newWishlist = require('./newWishlist');

describe('newWishlist component', function () {
  beforeEach(function () {
    angular
      .module('newWishlist', ['app/modals/newWishlist/newWishlist.html'])
      .component('newWishlist', newWishlist);
    angular.mock.module('newWishlist');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<newWishlist></newWishlist>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
