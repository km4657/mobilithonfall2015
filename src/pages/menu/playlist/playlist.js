/* global angular */
(function () {
    'use strict';

    angular.module('pages.playlist', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('menu.single', {
                    url: '/playlists/:playlistId',
                    views: {
                        'menuContent': {
                            templateUrl: 'pages/menu/playlist/playlist.html',
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