(function () {
  'use strict';

  angular
    .module('test', [
      'ngMockE2E',
      'test.load-backend-mock'
    ])
    .run(Test);

  Test.$inject = ['$httpBackend'];
  function Test($httpBackend) {
    $httpBackend.whenGET(function (url) {
      console.log(url);
      if (url.indexOf(".html") > -1) return true;
      if (url.indexOf(".json") > -1) return true;
      return false;
    }).passThrough();
  }

})();
