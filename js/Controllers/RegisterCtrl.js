


//Controller required to let users register to Hive
function RegisterCtrl($scope,$http,$location,$window) { 

     $scope.registered = false;
     $scope.register_status ="";

      //Form for registering login information
      this.formData = {
             username: '',
             password: '',
             email: '',
             usertype:'',
             confirmpassword:''


        };

      //Form for registering profile information
         this.formData = {
             firstname: '',
             lastname: '',
             buisnessname: '',
             address:'',
             postalcode:''


        };
    //Function used to Register for the application
   $scope.Register = function () {



   
   console.log(this.formData);

   var session = JSON.stringify(this.formData);
 


    $http.post('http://localhost:3000/register',session).
    success(function(data, status, headers, config) {
        // Check if the user doesnt exist
       

          if(data.content=="User can be Registered")
            {
            $scope.registered = true;
            $scope.register_status = "works";
            }
          else
            {$scope.register_status = data.content;}
         
})
}

}



app.controller('RegisterController', RegisterCtrl);



 

