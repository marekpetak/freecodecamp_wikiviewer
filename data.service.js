(function() {
    'use strict';

    angular
        .module('App.Services')
        .factory('dataService', ['$http', '$sce', function($http) {
            var _factory = {};
            var WIKI_API = "https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=";
            //var JSON_CALLBACK = "?callback=JSON_CALLBACK";

            function _searchWiki(searchThis) {
                var url = WIKI_API + searchThis; // + JSON_CALLBACK;
                return $http.jsonp(url);
                //return $http.get($sce.trustAsResourceUrl(url));
            }

            _factory.searchWiki = _searchWiki;

            return _factory;
        }]);
})();