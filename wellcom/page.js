

h()



function h() {
    var accounts = []

if(localStorage.getItem("accounts") != null) {
    accounts = JSON.parse(localStorage.getItem("accounts"))
}

var userInof = [] ;
userInof = JSON.parse(sessionStorage.getItem("user"))

var user = {
name: userInof.name ,
pass: userInof.pass
}



for(var i = 0 ; i < accounts.length ; i++){
    if(accounts[i].email === user.name &  accounts[i].pass === user.pass ) {
            var userName = accounts[i].name 
    }
    else{   
        console.log("hh");
    }
}
document.getElementById("welcom").innerHTML += userName
            console.log(userName);

}




