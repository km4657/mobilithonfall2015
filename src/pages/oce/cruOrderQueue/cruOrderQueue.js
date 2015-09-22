(function () {
    'use strict';

    angular.module('pages.oce.cru-order-queue', [
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('oce.cru-order-queue', {
                    url: '/cru-order-queue',
                    views: {
                        'oceContent': {
                            templateUrl: 'pages/oce/cruOrderQueue/cruOrderQueue.html',
                            controller: 'CRUOrderQueueCtrl as vm'
                        }
                    }
                })
        })
        .controller('CRUOrderQueueCtrl', CRUOrderQueueCtrl);

    CRUOrderQueueCtrl.$inject = ['$log'];
    function CRUOrderQueueCtrl($log) {
        var vm = this;
    };


})();