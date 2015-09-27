(function () {
    'use strict';

    angular.module('rest-services.wall-service', ['app.constants'])
        .service('WallService', WallService);

    WallService.$inject = ['$log', '$http', 'RestConstants', '$timeout'];

    function WallService($log, $http, RestConstants, $timeout) {
        var vm = this;
        
        vm.getPanel = function (panelID) {            
            
            var url = RestConstants.vvmw.supplant({panel:panelID});  
            $log.debug("URL IS: "+url);
                      
            return $http.get(url);
        }
    }
})();




