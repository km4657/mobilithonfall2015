(function () {
    'use strict';

    angular.module('components.panel', [])
            .directive('panel', panel);
    panel.$inject = ['$log', 'WallService', '$ionicGesture'];
    function panel($log, WallService, $ionicGesture) {
        return {
            restrict: 'E',
            scope: true,
            bindToController: {
                panelid: '=',
                render: '='
            },
            controller: PanelCtrl,
            controllerAs: 'vm',
            templateUrl: 'app/components/panel/panel.html',
            link: function (scope, element, attrs) {
                $ionicGesture.on('pinch', function (e)
                {
                    element.find('#panel').css('zoom', e.gesture.scale);
                    console.log(e.gesture.scale)
                }, element);
            }
        }
    }

    PanelCtrl.$inject = ['WallService'];
    function PanelCtrl(WallService) {
        var vm = this;
        vm.WallService = WallService;

        vm.show = function () {
            if (vm.panelid === vm.render)
                return true;
            if (vm.panelid === vm.render - 1)
                return true;
            if (vm.panelid === vm.render + 1)
                return true;
            return false;
        }
    }
})();




