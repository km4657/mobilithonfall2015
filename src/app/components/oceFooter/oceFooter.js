(function () {
    'use strict';

    angular.module('components.oce-footer', ['app'])
        .directive('oceFooter', oceFooter);

    oceFooter.$inject = ['$log'];
    function oceFooter($log) {
        var oceFooter = {};
        oceFooter.restrict='E';
        oceFooter.transclude=true;
        oceFooter.scope={};
        oceFooter.bindToController= {
            someObject: '=',
            someString: '@',
            someExpr: '&'
        };
        oceFooter.controller = oceFooterCtrl;
        oceFooter.controllerAs ='vm';
        oceFooter.templateUrl = 'app/components/oceFooter/oceFooter.html';
        return oceFooter;
    }
    
    oceFooterCtrl.$inject = [];
    function oceFooterCtrl() {
    }
})();




