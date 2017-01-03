function registerController($scope, toastr) {
  this.text = 'My brand new component!';
  toastr.error('Your credentials are wrong');
}

module.exports = {
  templateUrl: 'app/components/start/register.html',
  controller: registerController
};
