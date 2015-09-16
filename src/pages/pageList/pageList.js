(function () {
    'use strict';

    angular.module('pages.pagelist', ['app'])
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
        var vm = this;
        vm.modules=angular.module('pages');        
        vm.app=angular.module('app');
        vm.getModules=function(m){
            return angular.module(m).requires;
        }
    }
})();




