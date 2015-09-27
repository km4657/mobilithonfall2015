(function () {
    'use strict';

    angular.module('components.panel', [])
            .directive('panel', panel);
    panel.$inject = ['$log', 'WallService', '$ionicGesture', '$ionicScrollDelegate', '$timeout'];
    function panel($log, WallService, $ionicGesture, $ionicScrollDelegate, $timeout) {
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
                //$ionicScrollDelegate.zoomBy(.3);
            }
        }
    }

    PanelCtrl.$inject = ['WallService', '$timeout', '$ionicScrollDelegate'];
    function PanelCtrl(WallService, $timeout, $ionicScrollDelegate) {
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
        
        $timeout(function(){
            $ionicScrollDelegate.resize();
        }, 5000);
    }
})();




