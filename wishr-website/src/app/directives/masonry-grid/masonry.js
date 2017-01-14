function masonry($timeout) {
  return {
            restrict: 'AC',
            link: function (scope, elem, attrs) {
                var container = elem[0];
                var options = angular.extend({
                    itemSelector: '.item'
                }, angular.fromJson(attrs.masonry));

                var masonry = scope.masonry = new Masonry(container, options);

                var debounceTimeout = 0;
                scope.update = function() {
                    if (debounceTimeout) {
                        $timeout.cancel(debounceTimeout);
                    }
                    debounceTimeout = $timeout(function() {
                        debounceTimeout = 0;

                        masonry.reloadItems();
                        masonry.layout();

                        elem.children(options.itemSelector).css('visibility', 'visible');
                    }, 120);
                };

                scope.removeBrick = function() {
                    $timeout(function() {
                        masonry.reloadItems();
                        masonry.layout();
                   }, 500);
                };

                scope.appendBricks = function(ele) {
                    masonry.appended(ele);
                };

                scope.$on('masonry.layout', function() {
                    masonry.layout();
                });

                scope.update();
            }
        };
}

module.exports = masonry;
