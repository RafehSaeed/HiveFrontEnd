

app.factory('review',  function($http) { 
  return $http.get('http://localhost:3000/reviews.json') 
            .success(function(data) { 
           
          	return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
});
