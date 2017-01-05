function dashboardController($log, $rootScope) {
  $log.log($rootScope.loggedIn);
}
module.exports = {
  templateUrl: 'app/components/dashboard/dashboard.html',
  controller: dashboardController
};
