function friendsController($scope) {
  this.text = 'My brand new component!';
  $scope.text = 'hallo';
}

module.exports = {
  templateUrl: 'app/components/dashboard/friends.html',
  controller: friendsController
};
