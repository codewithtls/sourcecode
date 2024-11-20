function validateForm(){

    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    if (username === ""){
        document.getElementById('usernameError').textContent = "Username is required";
        document.getElementById('usernameError').style.display = 'block';
        return false;
    }

    if (password === ""){
        document.getElementById('passwordError').textContent = "Password is required";
        document.getElementById('passwordError').style.display = 'block';
        return false;
    }

    if (password.length <6){
        document.getElementById('passwordError').textContent = "Password must be of atleast 6 characters";
        document.getElementById('passwordError').style.display = 'block';
        return false;
    }
    

    return true;
}