(function () {
    'use strict';

    angular.module('pages.pagelist', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('pageList', {
                    url: '/pagelist',
                    templateUrl: 'pages/pageList/pageList.html',
                    controller: 'PageListCtrl as vm'
                })
        })
        .controller('PageListCtrl', PageListCtrl);

    PageListCtrl.$inject = [];

    function PageListCtrl() {
    }
})();




