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

    PageListCtrl.$inject = ['$log'];

    function PageListCtrl($log) {
        var vm = this;
        $log.debug('NAME:::: '+this.constructor.name);
        vm.modules=angular.module('pages');        
        vm.app=angular.module('app');
        vm.getModules=function(m){
            return angular.module(m).requires;
        }
    }
})();




