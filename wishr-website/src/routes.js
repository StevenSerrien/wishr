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
    .state('friends', {
      url: '/friends',
      component: 'friends'
    })
    .state('login', {
      url: '/login',
      component: 'login'
    })
    .state('wishlist', {
      url: '/wishlist/:wishlistId',
      component: 'wishlist'
    })
    .state('register', {
      url: '/register',
      component: 'register'
    });
}
