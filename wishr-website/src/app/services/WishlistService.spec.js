var angular = require('angular');
require('angular-mocks');
var {WishlistService} = require('./WishlistService');

describe('WishlistService service', function () {
  beforeEach(function () {
    angular
      .module('WishlistService', [])
      .service('WishlistService', WishlistService);
    angular.mock.module('WishlistService');
  });

  it('should', angular.mock.inject(function (WishlistService) {
    expect(WishlistService.getData()).toEqual(3);
  }));
});
