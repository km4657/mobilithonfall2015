(function () {
    'use strict';

    angular.module('rest-services.wall-service', ['app.constants'])
        .service('WallService', WallService);

    WallService.$inject = ['$log', '$http', 'RestConstants', '$timeout'];

    function WallService($log, $http, RestConstants, $timeout) {
        var vm = this;
        vm.list = [];
        vm.rows = [];
        vm.currentVets=[];
        
        function init() {
            $timeout(function() {
                vm.getList();
            }, 1000);
        }
        
        vm.getList = function () {
            $http.get(RestConstants.vvmw_50w).then(function (result) {
                vm.list = result.data;
                angular.forEach(vm.list, function (value, key) {
                    if (vm.rows[value.rowNumber] === undefined)
                        vm.rows[value.rowNumber] = [];
                    vm.rows[value.rowNumber].push(value);
                });
            });
        }
        init();
    }
})();




