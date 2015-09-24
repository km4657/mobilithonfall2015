(function () {
    'use strict';

    angular.module('pages.playlists', [
        'rest-services.playlists'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('menu.playlists', {
                    url: '/playlists',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/pages/menu/playlists/playlists.html',
                            controller: 'PlaylistsCtrl as vm'
                        }
                    }
                });
        })
        .controller('PlaylistsCtrl', PlaylistsCtrl);

    PlaylistsCtrl.$inject = ['$log', 'Playlists'];
    function PlaylistsCtrl($log, Playlists) {
        var vm = this;
        vm.playlists = Playlists;
    }

})();