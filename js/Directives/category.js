app.directive('category', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/Directives/category.html' 
  }; 
});