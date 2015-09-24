(function () {
    'use strict';

    angular.module('components.oce-footer', ['app'])
        .directive('oceFooter', oceFooter);

    oceFooter.$inject = ['$log'];
    function oceFooter($log) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            bindToController: {
                someObject: '=',
                someString: '@',
                someExpr: '&'
            },
            controller: oceFooterCtrl,
            controllerAs: 'vm',
            templateUrl: 'app/components/oceFooter/oceFooter.html',
        
        };
    }
    
    oceFooterCtrl.$inject = [];
    function oceFooterCtrl() {
    }
})();




