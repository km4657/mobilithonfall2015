(function () {
    'use strict';

    angular.module('rest-services.playlists', [])
        .factory('Playlists', Playlists);

    Playlists.$inject = ['$http'];

    function Playlists($http) {
        var vm = this;
        vm.list = [];
        vm.getList = function () {
            $http.get('/rest/playlist').then(function(result){                
                vm.list = result.data;
            });
        }
        return vm;
    }
})();




