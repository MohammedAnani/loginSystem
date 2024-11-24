var emailInput=document.getElementById("emailInput")
var passwordInput=document.getElementById("passwordInput");
var loginBtn=document.getElementById("loginBtn");
var err=document.querySelector(".err")

var usersContainers=[];

usersContainers=JSON.parse(localStorage.getItem("dataUser"));//elly masek kolelly fe localStorage
console.log(usersContainers);

function signInProcess() {
    if(localStorage.getItem("dataUser")==null){
        err.nextElementSibling.classList.replace("d-none","d-block")

    }
    else
    {
        for (var i = 0; i < usersContainers.length; i++) {
            if(emailInput.value==usersContainers[i].email &&passwordInput.value==usersContainers[i].password)
            {
                var userName=usersContainers[i].name;
                localStorage.setItem("userName",userName);
                location.href="/loginSystem/log_out/logout.html"
                // location.href="/loginSystem/log_out/logout.html"
                // location.href="../../log_out/logout.html"//live server
                // location.href="/loginSystem/log_out/logout.html"//github
                
            }
            else{
    
                loginBtn.nextElementSibling.classList.replace("d-none","d-block")
                
            }
        }
    }
   
    
}

loginBtn.addEventListener("click",function(){

    signInProcess();

})

