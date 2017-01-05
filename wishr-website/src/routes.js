module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    })
    .state('dashboard', {
      url: '/dashboard',
      component: 'dashboard'
    })
    .state('login', {
      url: '/login',
      component: 'login'
    })
    .state('register', {
      url: '/register',
      component: 'register'
    });
}
