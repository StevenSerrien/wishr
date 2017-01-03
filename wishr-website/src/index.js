var angular = require('angular');

var techsModule = require('./app/techs/index');
require('angular-ui-router');
var routesConfig = require('./routes');

var home = require('./app/main');
var register = require('./app/components/start/register');
var header = require('./app/header');
var footer = require('./app/footer');

require('./resources/sass/index.scss');

angular
  .module('app', [techsModule, 'ui.router'])
  .config(routesConfig)
  .component('home', home)
  .component('register', register)
  .component('fountainHeader', header)
  .component('fountainFooter', footer);
