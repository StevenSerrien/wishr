module.exports = {
  templateUrl: 'app/components/start/register.html',
  controller: registerController
};

function registerController($scope, toastr, auth) {
  this.text = 'My brand new component!';
  toastr.error('Your credentials are wrong');

  this.register = function () {
    auth.register("stevenserrien10@gmail.com", "DePatere9", "test123");
  };
}
