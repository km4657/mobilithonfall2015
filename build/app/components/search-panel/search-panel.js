(function () {
    'use strict';

    angular.module('components.search-panel', [])
        .service('SearchString', SearchString)
        .directive('searchPanel', searchPanel);

    SearchString.$inject = ['$log'];
    function SearchString($log) {
        var self = this;
        self.searchString='';
    }
    searchPanel.$inject = ['$log'];
    function searchPanel($log) {
        return {
            restrict: 'E',
            scope: true,
            bindToController: {
                searchString: '='
            },
            controller: SearchPanelCtrl,
            controllerAs: 'vm',
            templateUrl: 'app/components/search-panel/search-panel.html'
        }
    }

    SearchPanelCtrl.$inject = ['SearchString'];
    function SearchPanelCtrl(SearchString) {
        var vm = this;
        vm.SearchString = SearchString
    }

})();




