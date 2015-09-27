(function () {
    'use strict';

    angular
        .module('test.load-backend-mock', [
        ])
        .run(LoadBackendMock);

    LoadBackendMock.$inject = ['$httpBackend', '$http', 'RestConstants', '$log'];
    function LoadBackendMock($httpBackend, $http, RestConstants, $log) {
        angular.forEach(RestConstants, function (value, key) {
            $http.get('test/mocks/' + key + '.json').then(function (result) {
                $log.debug('Mocking: '+value);
                $httpBackend
                    .whenGET(value)
                    .respond(result.data);
            });
        });
    }

})();