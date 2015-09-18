(function () {
    'use strict';

    angular.module('rest-services.orderlists', [])
            .service('OrderService', OrderService);

    OrderService.$inject = ['$http', 'RestConstants'];

    function OrderService($http, RestConstants) {
        var vm = this;
        vm.list = [];

        return {
            init: function () {
                vm.getList();
            },
            getList: function () {
                $http.get(RestConstants.orderlist).then(function (result) {
                    vm.list = result.data;
                });
            }
        };
        init();
    }




})();