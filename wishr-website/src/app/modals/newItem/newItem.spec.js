var angular = require('angular');
require('angular-mocks');
var newItem = require('./newItem');

describe('newItem component', function () {
  beforeEach(function () {
    angular
      .module('newItem', ['app/modals/newItem/newItem.html'])
      .component('newItem', newItem);
    angular.mock.module('newItem');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<newItem></newItem>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
