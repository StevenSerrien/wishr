function fileread() {
  return {
        scope: {
            fileread: '='
        },
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var file = event.target.files[0];
                scope.fileread = file ? file : undefined;
                scope.$apply();
            });
        }
    };
}

module.exports = fileread;
