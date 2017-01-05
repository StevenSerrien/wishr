var angular = require('angular');

var techsModule = require('./app/techs/index');
require('angular-ui-router');
require('angular-toastr');
require('angular-animate');

var routesConfig = require('./routes');

var home = require('./app/main');
var register = require('./app/components/start/register');
var login = require('./app/components/start/login');
var dashboard = require('./app/components/dashboard/dashboard');
var header = require('./app/header');
var footer = require('./app/footer');

// SERVICES
var authenticationservice = require('./app/services/AuthenticationService');

require('./resources/sass/index.scss');

angular
  .module('app', [techsModule, 'ui.router', 'ngAnimate', 'toastr'])
  .config(routesConfig)
  .component('home', home)
  .component('register', register)
  .component('login', login)
  .component('dashboard', dashboard)
  .component('fountainHeader', header)
  .component('fountainFooter', footer)
  .service('auth', authenticationservice)
  .run(function ($rootScope) {
  // $rootScope.BASE_URL = "http://localhost:8888/public/";
  $rootScope.BASE_URL = "http://wishr-backend.dev/api";
});
