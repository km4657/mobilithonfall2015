(function () {
    'use strict';

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('menu.search', {
                    url: '/search',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/search.html'
                        }
                    }
                })

                .state('menu.browse', {
                    url: '/browse',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/browse.html'
                        }
                    }
                });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/menu/playlists');
        });
})();
