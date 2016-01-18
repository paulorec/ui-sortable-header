## ui-sortable-header


Easily sort your table header using this angular directive.

### How to

 Include the js file
 
          <script src="js/ui-sortable-header-example.js" charset="utf-8"></script>
          

Add ui-sortable-group to the section you want to sort

Add ui-sortable-group-refresh and pass your refresh function to implement your logic and update your models.

### Example
your html:

          <table class="table">
            <thead ui-sortable-group ui-sortable-group-refresh="ctrl.refresh">
              <tr>
                <th ui-sortable-field="name">
                  City
                </th>
                <th ui-sortable-field="mayor">
                  Mayor
                </th>
                <th ui-sortable-field="population">
                  Population
                </th>
              </tr>
            </thead>
            
in your controller:

        function refresh(predicate, asc) {

          /**
           * sortable logic
           */ 
          vm.predicate = predicate;
          vm.asc = asc;
        };
