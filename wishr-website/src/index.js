var angular = require('angular');

var techsModule = require('./app/techs/index');
require('angular-ui-router');
require('angular-toastr');
require('angular-animate');
require('angular-ui-bootstrap');

var routesConfig = require('./routes');

var home = require('./app/main');
var register = require('./app/components/start/register');
var login = require('./app/components/start/login');
var dashboard = require('./app/components/dashboard/dashboard');
var friends = require('./app/components/dashboard/friends');
var header = require('./app/header');
var footer = require('./app/footer');

// Modals
var mWishlist = require('./app/modals/newWishlist/newWishlist');

// SERVICES
var authenticationservice = require('./app/services/AuthenticationService');
var wishlistservice = require('./app/services/WishlistService');

require('./resources/sass/index.scss');

angular
  .module('app', [techsModule, 'ui.router', 'ngAnimate', 'toastr', 'ui.bootstrap'])
  .config(routesConfig)
  .component('home', home)
  .component('register', register)
  .component('login', login)
  .component('dashboard', dashboard)
  .component('fountainHeader', header)
  .component('fountainFooter', footer)
  .component('friends', friends)
  .component('mWishlist', mWishlist)
  .service('auth', authenticationservice)
  .service('wish', wishlistservice)
  .run(function ($rootScope) {
  // $rootScope.BASE_URL = "http://localhost:8888/public/";
  $rootScope.BASE_URL = "http://wishr-backend.dev/api";
});
