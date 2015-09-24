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

    wallCtrl.$inject = ['$log', '$timeout', '$ionicModal', '$scope'];

    function wallCtrl($log, $timeout, $ionicModal, $scope) {
        var vm = this;
        // Open the login modal
        vm.login = function () {
            vm.modal.show();
        };
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('app/pages/wall/login/login.html', {
            scope: $scope
        }).then(function (modal) {
            vm.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            vm.modal.hide();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    }
})();




