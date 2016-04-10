



function LoginCtrl($scope,$http) { 

  

         this.formData = {
             password: '',
             email: ''
        };


   $scope.Login = function () {
       
       //Send Post Request

     
    
     var session = JSON.stringify(this.formData);
     
     console.log (session);

    $http.post('http://localhost:3000/login',session).
    success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }
  

}





app.controller('LoginController', LoginCtrl);

