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
                            templateUrl: 'pages/menu/playlists/playlists.html',
                            controller: 'PlaylistsCtrl as vm'
                        }
                    }
                })
        })
        .controller('PlaylistsCtrl', PlaylistsCtrl);

    PlaylistsCtrl.$inject = ['Playlists'];
    function PlaylistsCtrl(Playlists) {
        var vm = this;
        vm.playlists = Playlists;
    };


})();