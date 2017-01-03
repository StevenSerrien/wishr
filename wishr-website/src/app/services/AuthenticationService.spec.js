var angular = require('angular');
require('angular-mocks');
var {AuthenticationService} = require('./AuthenticationService');

describe('AuthenticationService service', function () {
  beforeEach(function () {
    angular
      .module('AuthenticationService', [])
      .service('AuthenticationService', AuthenticationService);
    angular.mock.module('AuthenticationService');
  });

  it('should', angular.mock.inject(function (AuthenticationService) {
    expect(AuthenticationService.getData()).toEqual(3);
  }));
});
