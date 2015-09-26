(function () {
    'use strict';

    angular.module('components.panel', [])
            .directive('panel', panel);
    panel.$inject = ['$log', 'WallService'];
    function panel($log, WallService) {
        return {
            restrict: 'E',
            scope: {
                panelid: '=',
                render: '='
            },
            controller: PanelCtrl,
            templateUrl: 'app/components/panel/panel.html'
        }
    }

    PanelCtrl.$inject = ['WallService', '$scope'];
    function PanelCtrl(WallService, $scope) {
        var vm = $scope;
        vm.rows = [];
        vm.WallService = WallService;

        vm.currentVets = [];
        vm.show = function () {
            if (vm.panelid === vm.render)
                return true;
            if (vm.panelid === vm.render - 1)
                return true;
            if (vm.panelid === vm.render + 1)
                return true;
            return false;
        }
        vm.getNames = function () {

            $scope.$watch(function () {
                if (1 < vm.WallService.list.length)
                    return vm.WallService.list;
                return null;
            }, function (newList) {
                if (null === newList)
                    return;
                angular.forEach(vm.WallService.list, function (value, key) {
                    if (vm.rows[value.rowNumber] === undefined)
                        vm.rows[value.rowNumber] = [];
                    vm.rows[value.rowNumber].push(value);
                });
                console.dir(vm.rows);
            });
        }
    }

})();




