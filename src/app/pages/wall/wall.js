(function () {
    'use strict';

    angular.module('pages.wall', [
        'pages.playlists',
        'pages.playlist'])
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

                .state('wall.search', {
                    url: '/search',
                    views: {
                        'wallContent': {
                            templateUrl: 'app/pages/wall/templates/search.html'
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

    wallCtrl.$inject = ['$log', '$ionicSlideBoxDelegate'];

    function wallCtrl($log, $ionicSlideBoxDelegate) {
        var vm = this;
        vm.nextSlide = function () {
            $ionicSlideBoxDelegate.next();
        }
    }
})();




