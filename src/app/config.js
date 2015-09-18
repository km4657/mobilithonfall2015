(function () {
  'use strict';

  angular
    .module('app', [
      'test',
      'app.routes',
      'app.constants',
      'rest-services',
      'components',
      'pages'
    ])
    .config(function () { });

})();
