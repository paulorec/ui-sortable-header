(function() {
    'use strict';

    angular
        .module('uiSortableHeader')
        .controller('uiSortableHeaderExample', Controller);

    Controller.$inject = ['$scope'];

    /* @ngInject */
    function Controller($scope) {
        var vm = this;

        vm.cities = [];

        activate();

        function activate() {

          vm.cities = [{
            name : "Seattle"
            ,mayor : "Ed Murray"
            ,population : 662400
          }
          ,{
            name : "New York"
            ,mayor : "Bill de Blasio"
            ,population : 8405837
          }
          ,{
            name : "Chicago"
            ,mayor : "Rahm Emanuel"
            ,population : 2719000
          }
          ]
        }
    }
})();
