(function () {
    'use strict';

    angular.module('app.constants',[])
        .value('version', '0.1')
        .constant('RestConstants',
				{
					'playlist' : '/rest/playlist'
                });
})();
