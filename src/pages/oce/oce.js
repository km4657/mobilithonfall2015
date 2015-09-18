(function () {
    'use strict';

    angular.module('pages.oce', [
        'app',
        'pages.oce.cru-order-queue'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            /** Default route for page */
            $urlRouterProvider.when('/oce', '/oce/cru-order-queue');
            $stateProvider
                .state('oce', {
                    url: '/oce',
                    abstract: 'true',
                    templateUrl: 'pages/oce/oce.html',
                    controller: 'OCECtrl as vm'
                })
        })
        .controller('OCECtrl', OCECtrl);

    OCECtrl.$inject = [];

    function OCECtrl() {
        var vm = this;
    }
})();




