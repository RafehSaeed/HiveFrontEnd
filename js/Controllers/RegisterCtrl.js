


//Controller required to let users register to Hive
function RegisterCtrl($scope,$http,$location,$window) { 

      registered = false;
      this.formData = {
             username: '',
             password: '',
             email: '',
             usertype:'',
             confirmpassword:''


        };
    //Function used to Register for the application
   $scope.Register = function () {



   this.registered = true;
   console.log(this.formData);
}

}



app.controller('RegisterController', RegisterCtrl);



 

