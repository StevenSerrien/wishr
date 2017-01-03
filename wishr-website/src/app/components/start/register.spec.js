var angular = require('angular');
require('angular-mocks');
var register = require('./register');

describe('register component', function () {
  beforeEach(function () {
    angular
      .module('register', ['app/components/start/register.html'])
      .component('register', register);
    angular.mock.module('register');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<register></register>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
