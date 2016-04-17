



function LoginCtrl($scope,$http,$location,$window) { 


      if($window.sessionStorage.loggedin == "true"){
       $scope.loggedin = true;
       $scope.username =  $window.sessionStorage.username;
     }

      else
      {
        $scope.loggedin = false;
      }

       console.log($scope.loggedin);

         this.formData = {
             password: '',
             email: ''

        };



    $scope.logOut = function() {
    
   
      
    $window.sessionStorage.loggedin = false;
     $scope.loggedin = false;
    console.log($scope.loggedin);


      

    };
 
    //Function used to Login to the application
   $scope.Login = function () {
       
          console.log(this.formData);
       //Send Post Request
    $scope.login_status = ""
    
     var session = JSON.stringify(this.formData);
 


    $http.post('http://localhost:3000/login',session).
    success(function(data, status, headers, config) {
        // Check if the user doesnt exist
          console.log(data);

         var datasize = Object.keys(data);
        
         
         if (datasize.length == 1)
              {
              $scope.login_status= data.content;
                //$scope.loggedin= false;
              $window.sessionStorage.loggedin = false;
         
              
              }
             else {

                if(datasize.length > 7)
                {

              $scope.loggedin= true;
              $window.sessionStorage.loggedin = true;
              $window.sessionStorage.username = data.username
            // $window.sessionStorage.username = data[username];
            



   
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
  

// Categories Factory



}








app.controller('LoginController', LoginCtrl);
app.controller('Category',category);


     function category($scope,category) {
  category.success(function(data) {
  $scope.category = data;
   // console.log(data);
  });
}


