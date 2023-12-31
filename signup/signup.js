var userNameInput = document.getElementById("userNameInput")
var emailInput = document.getElementById("emailInput")
var passwordInput = document.getElementById("passwordInput")
var signUpbtn = document.getElementById("signup-btn")
var logInBtn  = document.getElementById("logIn-btn")
var warinig  = document.getElementById("warinig")
var warinigG  = document.getElementById("warinig-g")



    if(localStorage.getItem("accounts") != null ){
        accounts = JSON.parse(localStorage.getItem("accounts"))
    }

    var accounts = [];

    if(localStorage.getItem("accounts") != null ){
        accounts = JSON.parse(localStorage.getItem("accounts"))
    }

    signUpbtn.addEventListener("click", signup);
    
    function signup() {
        var account = {
            name: userNameInput.value,
            email: emailInput.value,
            pass: passwordInput.value
        };
        var emailExists = false;
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].email === account.email) {
                emailExists = true;
                break;

            }
        }
    
        if (emailExists) {
            warinig.classList.remove("d-none");
            warinigG.classList.add("d-none");

        } else {
            accounts.push(account);
            localStorage.setItem("accounts", JSON.stringify(accounts));
            warinig.classList.add("d-none");
            warinigG.classList.remove("d-none");
            clear()
        }
    }


    function clear() {
        userNameInput.value = "" ;
        emailInput.value = "" ;
        passwordInput.value = "" ;
    }





























logInBtn.addEventListener("click" , tologIn  )
function tologIn () {
    location = "../index.html"
}