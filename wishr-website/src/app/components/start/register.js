module.exports = {
  templateUrl: 'app/components/start/register.html',
  controller: registerController
};

function registerController($scope, toastr, auth) {
  this.text = 'My brand new component!';
  toastr.error('Your credentials are wrong');

  this.register = function () {
    auth.register("stevenserrien100@gmail.com", "DePatere44", "test123");
  };
}
