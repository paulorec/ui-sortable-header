(function(angular) {

  "use strict";

  angular
  .module("uiSortableHeader", [])
  .directive("uiSortableGroup", SortableGroup)
  .directive("uiSortableField", SortableField);

  function SortableGroup() {

    var controller = function($scope, $attrs) {

      var vm = this;

      vm.predicate = null;
      vm.asc = true;

      vm.refresh = $attrs.uiSortableGroup || function() {};

      vm.setPredicate = function(predicate) {

        vm.predicate = predicate;

        _refresh();
      };

      vm.getPredicate = function() {

        return vm.predicate;
      };

      vm.setAsc = function(asc) {

        vm.asc = asc;

        _refresh();
      };

      vm.getAsc = function() {
        return vm.asc;
      }

      function _refresh() {

        $scope.$broadcast("ui-sortable-group-change", {});
        vm.refresh(vm.predicate, vm.asc);

      }
    };
    var directive = {
      restrict : "A"
      ,controller : controller
    }

    return directive;
  }

  function SortableField() {

    var directive = {
        restrict : "A"
        ,require : "^uiSortableGroup"
        ,link: function(scope, element, attrs, uiSortableGroup) {

          var onClick = function(event) {

            var predicate = attrs.uiSortableField;
            var asc = (predicate === uiSortableGroup.getPredicate()) ? !uiSortableGroup.getAsc() : true;

            uiSortableGroup.setPredicate(predicate);
            uiSortableGroup.setAsc(asc);

          };

          element.bind('click', onClick);
          element.addClass('ui-sortable-field');

          scope.$on("ui-sortable-group-change", function(event) {

            element.removeClass('ui-sortable-field-asc');
            element.removeClass('ui-sortable-field-desc');

            if(uiSortableGroup.getPredicate() != attrs.uiSortableField) {

              //nop
            } else if(uiSortableGroup.getAsc())

              element.addClass('ui-sortable-field-asc');

            else {

              element.addClass('ui-sortable-field-desc');
            }

          });

        }
    }

    return directive;
  }

}(window.angular));
