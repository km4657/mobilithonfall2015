(function () {
    'use strict';

    angular.module('components.panel', [])
        .directive('panel', panel);
    panel.$inject = ['$log'];
    function panel($log) {
        return {
            restrict: 'E',
            scope: true,
            bindToController: {
                panelid: '=',                
                render: '='
            },
            controller: PanelCtrl,
            controllerAs: 'vm',
            templateUrl: 'app/components/panel/panel.html'
        }
    }

    PanelCtrl.$inject = [];
    function PanelCtrl() {
        var vm = this;
        vm.show = function() {
            if (vm.panelid===vm.render) return true;
            if (vm.panelid===vm.render-1) return true;
            if (vm.panelid===vm.render+1) return true;
            return false;
        }
    }

})();




