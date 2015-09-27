/* global angular */
(function () {
    'use strict';

    angular.module('pages.panels', [
        'components.panel'
    ])
        .config(function ($stateProvider) {
        $stateProvider
            .state('wall.panels', {
            url: '/panels',
            views: {
                'wallContent': {
                    templateUrl: 'app/pages/wall/panels/panels.html',
                    controller: 'panelsCtrl as vm'
                }
            }
        });
    })
        .controller('panelsCtrl', panelsCtrl);

    panelsCtrl.$inject = ['$log', '$scope', '$ionicSlideBoxDelegate', '$timeout'];
    function panelsCtrl($log, $scope, $ionicSlideBoxDelegate, $timeout) {
        var vm = this;
        vm.slideDelegate=$ionicSlideBoxDelegate.$getByHandle('panelbox');
        vm.panelList = [];

        function init() {
            for (var i = 1; i < 141; i++) {
                vm.panelList[i] = (i > 70 ? i - 70 + "W" : i + "E");
            }
            //  vm.slideHasChanged(120);
        }

        vm.slideHasChanged = function (index) {
            $log.debug('Slide changed to: ' + index);
            vm.currentPanel = vm.panelList[index];
            vm.currentPanelScroll = index;
        };
        vm.changePage = function () {
            $log.debug('trying to changed to: 121');
            vm.slideDelegate.slide(121);
        };
        init();
        
        
            $timeout(function () {
                vm.slideDelegate.update();
                vm.slideDelegate.enableSlide = false;
                vm.slideDelegate.slide(120);
            }, 1000);
    }

})();