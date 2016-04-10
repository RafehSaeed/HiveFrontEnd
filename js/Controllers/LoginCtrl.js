



function LoginCtrl($scope,$http,$location,$window) { 

 

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
                $scope.loggedin= false;
              
              }
             else {

                if(datasize.length > 7)
                {

              $scope.loggedin= true;
              mainpageref = "file:///home/rafeh/Desktop/Hive-FrontEnd/mainpage.html";
            

             

               $window.location.href = mainpageref;
             }
      
              }
        
      }).
      error(function(data, status, headers, config) {

               // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }
  

}





app.controller('LoginController', LoginCtrl);

