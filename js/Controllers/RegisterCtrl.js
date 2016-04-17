


//Controller required to let users register to Hive
function RegisterCtrl($scope,$http,$location,$window) { 

      this.formData = {
             username: '',
             password: '',
             email: '',
             usertype:'',
             confirmpassword:''


        };
    //Function used to Register for the application
   $scope.Register = function () {




   console.log(this.formData);
}

}



app.controller('RegisterController', RegisterCtrl);



 

