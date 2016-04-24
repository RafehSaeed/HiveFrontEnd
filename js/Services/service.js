app.factory('service',  function($http) { 
  return $http.get('http://localhost:3000/services.json') 
            .success(function(data) { 
           
          	return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
});
