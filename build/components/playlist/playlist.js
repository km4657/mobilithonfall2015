(function () {
    'use strict';

    angular.module('controllers.playlist', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('menu.single', {
                    url: '/playlists/:playlistId',
                    views: {
                        'menuContent': {
                            templateUrl: 'components/playlist/playlist.html',
                            controller: 'PlaylistCtrl as vm'
                        }
                    }
                })
        })
        .controller('PlaylistCtrl', PlaylistCtrl);
    
    PlaylistCtrl.$inject=['$stateParams'];
    function PlaylistCtrl($stateParams) {
        var vm = this;
        vm.id = $stateParams.playlistId;
    };


})();