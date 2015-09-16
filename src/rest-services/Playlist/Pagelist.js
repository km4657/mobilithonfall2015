(function () {
    'use strict';

    angular.module('rest-services.playlists', [])
        .factory('Playlists', Playlists);

    Playlists.$inject = [];

    function Playlists() {
        var vm = this;
        vm.list=[
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'New Wave', id: 6 }
        ]
        return vm;
    }
})();




