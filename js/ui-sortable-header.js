(function(angular) {

  "use strict";

  angular
  .module("sortableHeader")
  .directive("sortableGrouper", SortableGrouper)
  .directive("sortableField", SortableField)

  function SortableGrouper() {

    var directive = {
      restrict : "AE"
    }

    return directive;
  }

  function SortableField() {

  }

}(window.angular));
