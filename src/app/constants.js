(function () {
    'use strict';

    angular.module('app.constants', [])
            .value('version', '0.1')
            .constant('RestConstants',
                    {
                        'playlist': '/rest/playlist',
                        'orderlist': '/rest/orderlist',
                        'playlists': '/rest/playlist&name={listname}',                        
                        'vvmw': '/rest/vvmw&panel={panel}',
                        /**
                         * Mocked out URLs 
                         */
                        'reggae': '/rest/playlist&name=reggae',
                        'vvmw_50W': '/rest/vvmw&panel=50W',
                        'vvmw_51W': '/rest/vvmw&panel=51W',
                        'vvmw_52W': '/rest/vvmw&panel=52W',
                        'vvmw_53W': '/rest/vvmw&panel=53W',
                        'vvmw_54W': '/rest/vvmw&panel=54W'
                    });
})();
