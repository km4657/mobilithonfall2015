(function () {
    'use strict';

    angular.module('app.constants', [])
            .value('version', '0.1')
            .constant('RestConstants',
                    {
                        'playlist': '/rest/playlist',
                        'orderlist': '/rest/orderlist',
                        'playlists': '/rest/playlist&name={listname}',
                        /**
                         * Mocked out URLs 
                         */
                        'reggae': '/rest/playlist&name=reggae',
                        'vvmw_50w': '/rest/vvmw'
                    });
})();
