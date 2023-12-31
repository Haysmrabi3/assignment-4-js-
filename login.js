var userNameInput = document.getElementById("userNameInput")
var passwordInput = document.getElementById("passwordInput")
var signupBtn  = document.getElementById("signUp-btn")
var loginbtn = document.getElementById("logIn-btn")
var wrong = document.getElementById("wrong")





var accounts = []

if(localStorage.getItem("accounts") != null) {
    accounts = JSON.parse(localStorage.getItem("accounts"))
}




loginbtn.addEventListener("click" , logIn )

function logIn () {
        var loginO  = {
        name :  userNameInput.value ,
        pass : passwordInput.value 
        }
    var cheek = false ;
    for(var i = 0 ; i < accounts.length ; i++) {
        if(accounts[i].email == loginO.name &  accounts[i].pass == loginO.pass ){
            cheek = true ;
        }
    }
    if(cheek) {
        sessionStorage.setItem("user",  JSON.stringify(loginO))
        location = "wellcom/page.html"
    }
    else {
        wrong.classList.remove("d-none")
    }
}

















// sign up btn 

signupBtn.addEventListener("click" , toSignUp  )
function toSignUp () {
    location = "signup/signup.html"
}