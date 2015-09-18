(function () {
    'use strict';
    angular.module('pages.order', [])
            .config(function ($stateProvider) {
                $stateProvider
                        .state('order', {
                            url: '/order',
                            templateUrl: 'pages/order/order.html',
                            controller: 'orderCtrl as vm'
                        })
            })
            .controller('orderCtrl', orderCtrl);

    orderCtrl.$inject = [];

    function orderCtrl() {
        var vm = this;
    }

})();


