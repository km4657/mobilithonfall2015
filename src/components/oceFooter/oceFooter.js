(function () {
    'use strict';

    angular.module('components.oce-footer', ['app'])
        .directive('oceFooter', oceFooter);

    oceFooter.$inject = [];
    function oceFooter() {
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
        oceFooter.templateUrl = 'components/oceFooter/oceFooter.html';
        return oceFooter;
    }
    
    oceFooterCtrl.$inject = [];
    function oceFooterCtrl() {
    }
})();




