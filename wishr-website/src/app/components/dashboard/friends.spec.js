var angular = require('angular');
require('angular-mocks');
var friends = require('./friends');

describe('friends component', function () {
  beforeEach(function () {
    angular
      .module('friends', ['app/components/dashboard/friends.html'])
      .component('friends', friends);
    angular.mock.module('friends');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<friends></friends>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
