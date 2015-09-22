(function () {
    'use strict';

    angular.module('components.oce-header', ['app'])
        .directive('oceHeader', oceHeader);

    oceHeader.$inject = ['$log'];
    function oceHeader($log) {
        var oceHeader = {};
        oceHeader.restrict='E';
        oceHeader.transclude=true;
        oceHeader.scope={};
        oceHeader.bindToController= {
            someObject: '=',
            someString: '@',
            someExpr: '&'
        };
        oceHeader.controller = oceHeaderCtrl;
        oceHeader.controllerAs ='vm';
        oceHeader.templateUrl = 'components/oceHeader/oceHeader.html';
        return oceHeader;
    }
    
    oceHeaderCtrl.$inject = [];
    function oceHeaderCtrl() {
    }
})();




