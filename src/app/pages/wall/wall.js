(function () {
    'use strict';

    angular.module('pages.wall', [
        'pages.search',
        'pages.panels'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            /** Default route for page */
            $urlRouterProvider.when('/wall', '/wall/splash');
            $stateProvider
                .state('wall', {
                    url: '/wall',
                    abstract: 'true',
                    templateUrl: 'app/pages/wall/wall.html',
                    controller: 'wallCtrl as vm'
                })
                .state('wall.splash', {
                    url: '/splash',
                    views: {
                        'wallContent': {
                            templateUrl: 'app/pages/wall/templates/splash.html'
                        }
                    }
                })

                .state('wall.donate', {
                    url: '/donate',
                    views: {
                        'wallContent': {
                            templateUrl: 'app/pages/wall/templates/donate.html'
                        }
                    }
                })

                .state('wall.visualsearch', {
                    url: '/visualsearch',
                    views: {
                        'wallContent': {
                            templateUrl: 'app/pages/wall/templates/visualsearch.html'
                        }
                    }
                })

                .state('wall.browse', {
                    url: '/browse',
                    views: {
                        'wallContent': {
                            templateUrl: 'app/pages/wall/templates/browse.html'
                        }
                    }
                });
        })
        .controller('wallCtrl', wallCtrl);

    wallCtrl.$inject = ['$log'];

    function wallCtrl($log) {
        var vm = this;
    }
})();




