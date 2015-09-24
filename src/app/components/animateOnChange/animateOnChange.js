(function () {
    'use strict';

    angular.module('components.aoc', ['app'])
        .directive('animateOnChange', animateOnChange);
    animateOnChange.$inject = ['$log', '$animate', '$timeout'];
    function animateOnChange($log, $animate, $timeout) {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {
                scope.$watch(attr.animateOnChange, function (nv, ov) {
                    if (nv != ov) {
                        var c = 'fade';
                        $animate.addClass(elem, c).then(function () {
                            $timeout(function () { $animate.removeClass(elem, c) });
                        });
                    }
                })
            }
        };
    }

})();




