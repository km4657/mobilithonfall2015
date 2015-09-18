(function () {
    'use strict';

    angular.module('rest-services.playlists', ['app.constants'])
        .factory('Playlists', Playlists);

    Playlists.$inject = ['$http', 'RestConstants'];

    function Playlists($http, RestConstants) {
        var vm = this;
        vm.list = [];

        function init() {
            vm.getList();
        }
        
        vm.getList = function () {
            $http.get(RestConstants.playlist).then(function (result) {
                vm.list = result.data;
            });
        }
        init();
        return vm;
    }
})();




