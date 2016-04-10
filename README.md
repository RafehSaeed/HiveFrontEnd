# HiveFrontEnd
$http.get('http://localhost:3000/admins.json') 
            .success(function(data) { 
              console.log(data);
              $scope.city_name=data[1].username; 
            }) 
            .error(function(err) { 
              return err; 
            }); 