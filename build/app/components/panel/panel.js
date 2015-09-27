(function () {
    'use strict';

    angular.module('components.panel', [])
        .directive('panel', panel);
    panel.$inject = ['$log', 'WallService', '$ionicGesture', '$ionicScrollDelegate', '$timeout'];
    function panel($log, WallService, $ionicGesture, $ionicScrollDelegate, $timeout) {
        return {
            restrict: 'E',
            scope: {
                panelid: '=',
                renderid: '='
            },
            controller: PanelCtrl,
            templateUrl: 'app/components/panel/panel.html',
            link: function (scope, element, attrs) {
            // attribute names change to camel case
            }
        }
    }

    PanelCtrl.$inject = ['$log', 'WallService', '$timeout', '$ionicScrollDelegate', '$scope'];
    function PanelCtrl($log, WallService, $timeout, $ionicScrollDelegate, $scope) {
        var vm = $scope;
        
        $scope.$watch('renderid', function(newValue) {
            if (vm.panelid === undefined) return false;
            if (vm.renderid === undefined) return false;
            $scope.show();
        })
        
        function init() {
            if (null === vm.panelDirection) {
                vm.panelDirection = vm.panelid.charAt(vm.panelid.length - 1);
                vm.justification = (vm.panelDirection === "E" ? "left" : "right");
            }
        }

        $scope.show = function () {
            if (vm.panelid === vm.renderid) {
                $log.debug('vm.panelid: ' + vm.panelid + ' vm.renderid: ' + vm.renderid);
                if (vm.rows === undefined) {
                    WallService.getPanel(vm.panelid).then(function (result) {
                        vm.rows=[];
                        angular.forEach(result.data, function (value, key) {
                            if (vm.rows[value.rowNumber] === undefined)
                                vm.rows[value.rowNumber] = [];
                            vm.rows[value.rowNumber].push(value);
                        });
                        vm.isShowing=true;
                        $timeout(function() {
                            $ionicScrollDelegate.$getByHandle(vm.panelid).resize();
                        },1000);
                    });
                }
                return true;
            }
            return false;
        }

        vm.getRow = function (row) {

            var returnString = "";
            if (vm.panelDirection === "W")
                returnString = "*";

            angular.forEach(row, function (value, key) {
                returnString = returnString + value.wallName + " * ";
            })

            if (vm.panelDirection === "E")
                returnString = returnString.substring(0, returnString.length - 2);

            return returnString;
        }

        init();
    }
})();




