



function LoginCtrl($scope,$http) { 

 

         this.formData = {
             password: '',
             email: ''

        };


   $scope.Login = function () {
       
       //Send Post Request
    $scope.login_status = ""
    
     var session = JSON.stringify(this.formData);
 


    $http.post('http://localhost:3000/login',session).
    success(function(data, status, headers, config) {
        // Check if the user doesnt exist
        

         var datasize = Object.keys(data);
        
         
         if (datasize.length == 1)
              {
              $scope.login_status= data.content;
              console.log(data.content)
                 
              }
      
    
        
      }).
      error(function(data, status, headers, config) {

               // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }
  

}





app.controller('LoginController', LoginCtrl);

