

app.factory('category',  function($http) { 
  return $http.get('http://localhost:3000/categories.json') 
            .success(function(data) { 
           
          	return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
});
