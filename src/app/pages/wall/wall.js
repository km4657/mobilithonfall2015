(function () {
    'use strict';

    angular.module('pages.wall', [
        'pages.search',
        'ngAnimate'
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
        .animation('.fade', function () {
            return {
                enter: function (element, done) {
                    element.css('display', 'none');
                    $(element).fadeIn(1000, function () {
                        done();
                    });
                },
                leave: function (element, done) {
                    $(element).fadeOut(1000, function () {
                        done();
                    });
                },
                move: function (element, done) {
                    element.css('display', 'none');
                    $(element).slideDown(500, function () {
                        done();
                    });
                }
            }
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




