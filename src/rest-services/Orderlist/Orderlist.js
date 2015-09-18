(function () {
    'use strict';

    angular.module('rest-services.order', [])
            .service('OrderService', OrderService);

    OrderService.$inject = ['$http', 'RestConstants'];

    function OrderService($http, RestConstants) {
        var vm = this;
        vm.list = [];

        return {
            self: function () {
                return vm;
            },
            getList: function () {
                $http.get(RestConstants.orderlist).then(function (result) {
                    vm.list = result.data;
                });
            },
            init: function () {
                vm.getList();
            }

        };
    }




})();