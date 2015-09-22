(function () {
    'use strict';
    angular.module('pages.order', ['rest-services.orderlist'])
            .config(function ($stateProvider) {
                $stateProvider
                        .state('orderlist', {
                            url: '/order',
                            templateUrl: 'pages/order/order.html',
                            controller: 'OrderCtrl as vm'
                        })
            })
            .controller('OrderCtrl', OrderCtrl);

    OrderCtrl.$inject = ['OrderService'];
    function OrderCtrl(OrderService) {
        var vm = this;
        vm.orderlist = OrderService;
    }

})();


