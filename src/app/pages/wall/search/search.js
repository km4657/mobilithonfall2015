/* global angular */
(function () {
    'use strict';

    angular.module('pages.search', [
        'components.aoc'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('wall.single', {
                    url: '/search',
                    views: {
                        'wallContent': {
                            templateUrl: 'app/pages/wall/search/search.html',
                            controller: 'searchCtrl as vm'
                        }
                    }
                });
        })
        .controller('searchCtrl', searchCtrl);
    
    searchCtrl.$inject=['$log', '$stateParams', '$interval'];
    function searchCtrl($log, $stateParams, $interval) {
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