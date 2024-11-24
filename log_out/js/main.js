var userName=document.getElementById("userName")
userName.innerHTML=localStorage.getItem("userName");

var logOut=document.getElementById("logOut");

function logOutProcess(){

    localStorage.clear();
    location.href="/loginSystem/index.html"
    // location.href="/index.html"// live server
}
logOut.addEventListener("click",function(){
    logOutProcess();
    
})