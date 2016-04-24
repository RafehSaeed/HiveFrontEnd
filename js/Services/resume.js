

app.factory('resume',  function($http) { 
  return $http.get('http://localhost:3000/resumes.json') 
            .success(function(data) { 
           
          	return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
});
