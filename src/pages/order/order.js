(function () {
    'use strict';
    angular.module('pages.order', [])
            .config(function ($stateProvider) {
                $stateProvider
                        .state('order', {
                            url: '/order',
                            templateUrl: 'pages/order/order.html',
                            controller: 'OrderCtrl as vm'
                        })
            })
            .controller('orderCtrl', OrderCtrl);

    OrderCtrl.$inject = [];

    function OrderCtrl() {
        var vm = this;
        vm.id = $stateParams;
    }

})();


