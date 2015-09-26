/* global angular */
(function () {
    'use strict';

    angular.module('pages.visual-search', [
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('wall.visual-search', {
                    url: '/visual-search',
                    views: {
                        'wallContent': {
                            templateUrl: 'app/pages/wall/visual-search/visual-search.html',
                            controller: 'VisualSearchCtrl as vm'
                        }
                    }
                });
        })
        .controller('VisualSearchCtrl', VisualSearchCtrl);
    
    VisualSearchCtrl.$inject=['$log', '$stateParams', '$interval'];
    function VisualSearchCtrl($log, $stateParams, $interval) {
        var vm = this;        
        var count = 0;
        
        var items = [
            { name: "First Name" },
            { name: "Last Name" },
            { name: "State" },
            { name: "City" },
            { name: "County" },
            { name: "School" }
        ];

        vm.item = items[0];
        $interval(setNextItem, 2000)

        function setNextItem() {
            if (count === items.length) count = 0;
            vm.item = items[count];
            count = count + 1;
        }
    }


})();