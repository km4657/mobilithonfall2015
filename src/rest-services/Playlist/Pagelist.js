(function () {
    'use strict';

    angular.module('rest-services.playlists', ['app.constants'])
        .service('Playlists', Playlists);

    Playlists.$inject = ['$http', 'RestConstants'];

    function Playlists($http, RestConstants) {
        var vm = this;
        console.log('NAME:::: '+this.constructor.name);
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
    }
})();




