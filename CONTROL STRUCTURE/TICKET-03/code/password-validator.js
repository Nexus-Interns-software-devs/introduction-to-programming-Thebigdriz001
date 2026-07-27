let password = "Securepass99";
let hasMinLength = password.length >= 8;
let hasNumber = /\d/. test(password);
let hasUppercase = /[A-Z]/. test(password);

if(hasMinLength && hasNumber && hasUppercase){
    console.log("Password is valid");
}else{
    console.log("Password is invalid");
}

if(!hasMinLength){
    console.log("Password must be atleast 8 characters long.");
}
if(!hasNumber){
    console.log("Password must contain atleast one number.");
}
if(!hasUppercase){
    console.log("Password must contain atleast one uppercase letter.");
}


