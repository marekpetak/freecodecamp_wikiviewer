(function() {
    'use strict';



    angular
        .module('App.Components')
        .component('main', {
            templateUrl: 'home.component.html',
            controller: function HomeController(dataService) {
                var vm = this;

                vm.searchValue = '';

                vm.searchWiki = function() {
                    dataService.searchWiki(vm.searchValue).then(function(data) {
                        vm.searchResult = data.data;
                    }).catch(function(error) {
                        console.log(error);
                    });
                }
            }
        });
})();