var angular = require('angular');
require('angular-mocks');
var dashboard = require('./dashboard');

describe('dashboard component', function () {
  beforeEach(function () {
    angular
      .module('dashboard', ['app/components/dashboard/dashboard.html'])
      .component('dashboard', dashboard);
    angular.mock.module('dashboard');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<dashboard></dashboard>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
