var nameInput=document.getElementById("nameInput");
var emailInput=document.getElementById("emailInput");
var passwordInput=document.getElementById("passwordInput");

var success=document.querySelector(".success");
var error=document.querySelector(".error");

var signUpBtn=document.getElementById("signUpBtn");
var usersContainers=[];

//signup

function userSignUp(){

    if(validateForm(nameInput)&&validateForm(emailInput)&&validateForm(passwordInput)){
        var dataUser={
            name:nameInput.value,
            email:emailInput.value,
            password:passwordInput.value
        }
        usersContainers.push(dataUser);
        localStorage.setItem("dataUser",JSON.stringify(usersContainers))
    console.log(dataUser);
    success.classList.replace("d-none","d-block");

    clearForm()

    }
    else{
        error.classList.replace("d-none","d-block");
    }

}
signUpBtn.addEventListener("click",userSignUp);

//clearform

function clearForm(){
    nameInput.value="";
    emailInput.value="";
    passwordInput.value="";
}

//validation

function validateForm(element) { 
    var regex={
        nameInput:/^[a-zA-Z0-9_]{3,15}$/,
        emailInput:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        passwordInput:/^[a-zA-Z0-9]{6,}$/
    }

    if(regex[element.id].test(element.value)==true)
    {
        element.classList.add("is-valid") 
        element.classList.remove("is-invalid") 
        element.nextElementSibling.classList.replace("d-block","d-none")

        return true
    }
    else
    {
        element.classList.add("is-invalid") 
        element.classList.remove("is-valid") 
        element.nextElementSibling.classList.replace("d-none","d-block")
        return false
    }

 }