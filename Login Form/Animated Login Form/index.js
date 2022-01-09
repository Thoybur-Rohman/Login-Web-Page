function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username=="Thoybur" && password=="Rahman"){
        alert("login succesfully done ");
        return true;
    }
    else {
        alert("login failed")
    }

}