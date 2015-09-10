(function () {
    'use strict';

    angular.module('controllers.playlists', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('menu.playlists', {
                    url: '/playlists',
                    views: {
                        'menuContent': {
                            templateUrl: 'components/playlists/playlists.html',
                            controller: 'PlaylistsCtrl as vm'
                        }
                    }
                })
        })
        .controller('PlaylistsCtrl', PlaylistsCtrl);

    function PlaylistsCtrl() {
        var vm = this;
        vm.playlists = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'New Wave', id: 6 }
        ];
    };


})();