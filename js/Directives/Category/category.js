app.directive('category', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/Directives/Category/category.html' 
  }; 
});

