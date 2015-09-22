(function () {
    'use strict';

    angular.module('pages.menu', [
        'pages.playlists',
        'pages.playlist'])
        .config(function ($stateProvider, $urlRouterProvider) {
            /** Default route for page */
            $urlRouterProvider.when('/menu', '/menu/playlists');
            $stateProvider
                .state('menu', {
                    url: '/menu',
                    abstract: 'true',
                    templateUrl: 'app/pages/menu/menu.html',
                    controller: 'MenuCtrl as vm'
                })                
                .state('menu.search', {
                    url: '/search',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/pages/menu/templates/search.html'
                        }
                    }
                })

                .state('menu.browse', {
                    url: '/browse',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/pages/menu/templates/browse.html'
                        }
                    }
                });
        })
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$log', '$timeout', '$ionicModal', '$scope'];

    function MenuCtrl($log, $timeout, $ionicModal, $scope) {
        var vm = this;
        // Open the login modal
        vm.login = function () {
            vm.modal.show();
        };
        var vm = this;
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('app/pages/menu/login/login.html', {
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
        }
    }
})();




