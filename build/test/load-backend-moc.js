(function () {
    'use strict';

    angular
        .module('test.load-backend-mock', [
        ])
        .run(LoadBackendMock);

    LoadBackendMock.$inject = ['$httpBackend', '$http', 'RestConstants'];
    function LoadBackendMock($httpBackend, $http, RestConstants) {
        angular.forEach(RestConstants, function (value, key) {
            $http.get('test/mocks/' + key + '.json').then(function (result) {
                $httpBackend
                    .whenGET(value)
                    .respond(result.data);
            });
        });
    }

})();