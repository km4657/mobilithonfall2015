(function () {
  'use strict';

  angular
    .module('app', [
      'app.routes',
      'app.constants',
      'rest-services',
      'components',
      'pages'
    ])
    .config(function () { });

})();
