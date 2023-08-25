 var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPass = document.getElementById('userPass');
var msgAlert = document.getElementById('msgAlert');
var userMsg = document.getElementById('userMsg');

var dataContainer ;

if(localStorage.getItem('userData')!=null)
{
    dataContainer = JSON.parse(localStorage.getItem('userData'));
}

else{
    dataContainer=[];
}

function add(){
    if (formValidation() && userName.value!=''){

        if (emailValidation()){
            var userData = {
                userName : userName.value,
                userEmail : userEmail.value,
                userPass :userPass.value
            }
            dataContainer.push(userData)
            localStorage.setItem('userData',JSON.stringify(dataContainer));
            msgAlert.innerHTML='account has been created successfully';
            if ( msgAlert.classList.contains('text-danger')){
            msgAlert.classList.replace('text-danger' , 'text-success')
            }
            else{
                msgAlert.classList.add('text-success');
            }
            clearSignupForm();
        }
        
        else
        {
            msgAlert.innerHTML='email already exists';
            if ( msgAlert.classList.contains('text-danger')){
                msgAlert.classList.replace( 'text-success' ,'text-danger' )
                }
                else{
                    msgAlert.classList.add('text-danger');
                }
        
        }

    }
   

}

function login(){

    if(formValidation() ){
        if(checkInput()){
            window.location.href='./home.html';
            clearLoginForm()
        }
        else{

            msgAlert.innerHTML='incorrect email or password';
            if ( msgAlert.classList.contains('text-danger')){
                msgAlert.classList.replace( 'text-success' ,'text-danger' )
                }
                else{
                    msgAlert.classList.add('text-danger');
                }
        }
     


    }

 }

function clearSignupForm(){
    userName.value ='';
    userEmail.value = '';
    userPass.value='';
 }

 function clearLoginForm(){
    userEmail.value = '';
    userPass.value='';
 }


 function emailValidation (){
     for (var i=0 ; i<dataContainer.length;i++){
         if (dataContainer[i].userEmail == userEmail.value){
             return false;
         }
     }
     return true ;
 }

 function formValidation(){
     if (userEmail.value == '' || userPass.value == ''  ){
        msgAlert.innerHTML='All inputs is required';
        if ( msgAlert.classList.contains('text-danger')){
            msgAlert.classList.replace( 'text-success' ,'text-danger' )
            }
            else{
                msgAlert.classList.add('text-danger');
            }
            return false;
    }
     
     else
     {
         return true;
     }
 }

 function logout(){
    window.location.href='./login.html';
}


 function checkInput(){
     for(var i=0 ; i<dataContainer.length ;i++){
         if(dataContainer[i].userEmail==userEmail.value && dataContainer[i].userPass==userPass.value){
             localStorage.setItem('userName' , JSON.stringify(dataContainer[i].userName));
            return true;
     }
 }
     return false;
}

if (location.href.includes('home')){
welcome();
}
function welcome(){
    var x = localStorage.getItem('userName');
    console.log(x);
    
    userMsg.innerHTML=`hello ${JSON.parse(x)}`;
}
