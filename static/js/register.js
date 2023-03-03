
function register_function(event) {
    event.preventDefault();
    console.log("register function called")
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;
    const alertmsg = document.getElementById('alertmsg');
    const emptymsg = document.getElementById('emptymsg');
    console.log(name, email, password, cpassword)

    if ( name == null || email == null || password == null || cpassword == null ){
        emptymsg.removeAttribute("hidden");
    }
    else if (password != cpassword) {
        alertmsg.removeAttribute("hidden");
    }
    else if ( (name == null || email == null || password == null || cpassword == null)  && (password == cpassword)){
        if (!alertmsg.hasAttribute("hidden")) { alertmsg.setAttribute("hidden", true); };
        console.log("else block came")
        fetch("/user/register", {
            method: "POST",
            headers: {"Content-Type": "application/json",'Accept': 'application/json'},
            body: JSON.stringify({'name': name,'email': email,'password': password})
        });
    }
}

document.getElementById("register").addEventListener('click', register_function);
