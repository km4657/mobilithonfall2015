(function () {
    'use strict';

    angular.module('rest-services.general-rest-handler', [
    ])
        .factory('generalRestHandler', generalRestHandler)
        .config(backendProvider);

    function generalRestHandler() {
        var self = {
            request: function (config) {
                if (config.url === undefined) return config;
                if ( (config.url.indexOf(".html") > -1) ||
                    (config.url.indexOf(".json") > -1)) return config;      
                console.log('ENTER general request code for ' + config.url + ' here!!!!');
                return config;
            },
            response: function (config) {
                if (config.config.url === undefined) return config;
                if ( (config.config.url.indexOf(".html") > -1) ||
                    (config.config.url.indexOf(".json") > -1)) return config;        
                console.log('ENTER general response code ' + config.config.url + ' here!!!!');
                return config;
            }
        };
        return self;
    }

    backendProvider.$inject = ['$httpProvider'];
    function backendProvider($httpProvider) {
        $httpProvider.interceptors.push('generalRestHandler');
    }

})();
