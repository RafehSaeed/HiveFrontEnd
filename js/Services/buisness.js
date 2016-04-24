

app.factory('buisness',  function($http) { 
  return $http.get('http://localhost:3000/buisnesses.json') 
            .success(function(data) { 
           
          	return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
});
