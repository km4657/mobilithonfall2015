/* global angular */
(function () {
    'use strict';

    angular.module('pages.playlist', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('wall.single', {
                    url: '/playlists/:playlistId',
                    views: {
                        'wallContent': {
                            templateUrl: 'app/pages/wall/playlist/playlist.html',
                            controller: 'PlaylistCtrl as vm'
                        }
                    }
                });
        })
        .controller('PlaylistCtrl', PlaylistCtrl);
    
    PlaylistCtrl.$inject=['$log', '$stateParams'];
    function PlaylistCtrl($log, $stateParams) {
        var vm = this;
        vm.id = $stateParams.playlistId;
    }


})();