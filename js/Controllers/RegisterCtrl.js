


//Controller required to let users register to Hive
function RegisterCtrl($scope,$http,$location,$window) { 

     $scope.registered = false;
     $scope.verified =  ($window.sessionStorage.verified == 'true');
     $scope.register_status ="";
     $scope.usertype = "";

      //Form for registering login information
      this.formData = {
             username: '',
             password: '',
             email: '',
             usertype:'',
             confirmpassword:'',
             firstname: '',
             lastname: '',
             buisnessname: '',
             address:'',
             postalcode:''


        };

     this.serviceData= {
              username: 'Rafeh',
             category_id:'',
             service_provider_id:''
         
           


        };

  


    //Function used to Register for the application
   $scope.Register = function () {



   var session = JSON.stringify(this.formData);



    $http.post('http://localhost:3000/registercheck',session).
    success(function(data, status, headers, config) {
        // Check if the user doesnt exist
       

          if(data.content=="User can be Registered")
            {
             
              var sessiondata = JSON.parse(session); // parsing Json Object
              console.log(session);
              $scope.usertype = sessiondata.usertype; 
              $scope.registered = true;
         

            }
          else
            {$scope.register_status = data.content;}
         
})
}




//Function user to complete user Registeration
$scope.Complete = function () {



   var session = JSON.stringify(this.formData);


    $http.post('http://localhost:3000/register',session).
    success(function(data, status, headers, config) {
    $window.location.href = "http://127.0.0.1:8080/index.html";  // Registeration complete go index page
    })
  

}


//Function user to let serviceProvider add a service
$scope.addService = function () {



 var service = JSON.stringify(this.serviceData);
 var serviceobject = JSON.parse(service); // parsing Json Object
 serviceobject.username =   $window.sessionStorage.username;
 var serviceobject  = JSON.stringify(serviceobject );


    console.log(serviceobject);

    $http.post('http://localhost:3000/addservice',serviceobject).
    success(function(data, status, headers, config) {

    })
  

}









}



app.controller('RegisterController', RegisterCtrl);



 

