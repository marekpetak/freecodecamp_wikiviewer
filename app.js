(function() {
    'use strict';

    var app = angular.module('App', ['App.Components', 'App.Services', 'angular-loading-bar']);

    angular.module('App.Components', []);
    angular.module('App.Services', []);

    app
        .component('main', {
            templateUrl: 'home.component.html',
            controller: function HomeController(dataService) {
                var vm = this;

                vm.searchResult = [{ title: 'one', snippet: 'snippedssdfsd' }];
                vm.searchValue = '';

                vm.searchWiki = function() {
                    dataService.searchWiki(vm.searchValue).then(function(data) {
                        vm.searchResult = data.data.query.pages;
                    }).catch(function(error) {
                        console.log(error);
                    });
                }
            }
        })
        .factory('dataService', ['$http', '$sce', function($http, $sce) {
            var _factory = {};
            var WIKI_API = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";

            function _searchWiki(searchThis) {
                var url = WIKI_API + searchThis;
                return $http.jsonp($sce.trustAsResourceUrl(url));
            }

            _factory.searchWiki = _searchWiki;

            return _factory;
        }]);
})();