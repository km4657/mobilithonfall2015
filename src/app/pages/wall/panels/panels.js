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
        vm.panelList = [];
        for (var i = 0; i < 140; i++) {
            vm.panelList[i] = i;
        }
        vm.setSlide=function() {
            $ionicSlideBoxDelegate.slide(50);
        }
        $timeout(function() {
            vm.setSlide();
        }, 500);
    }

})();