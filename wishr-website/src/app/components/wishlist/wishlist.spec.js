var angular = require('angular');
require('angular-mocks');
var wishlist = require('./wishlist');

describe('wishlist component', function () {
  beforeEach(function () {
    angular
      .module('wishlist', ['app/components/wishlist/wishlist.html'])
      .component('wishlist', wishlist);
    angular.mock.module('wishlist');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<wishlist></wishlist>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
