
function register_function(event) {
    event.preventDefault();
    console.log("register function called")
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;
    const alertmsg = document.getElementById('alertmsg');
    console.log(name, email, password, cpassword)

     if (password != cpassword) {
        alertmsg.removeAttribute("hidden");
    }
    else {
        if (!alertmsg.hasAttribute("hidden")) { alertmsg.setAttribute("hidden", true); };
        console.log("else block came")
        fetch("/user/register", {
            method: "POST",
            redirect: "follow",
            headers: {"Content-Type": "application/json",'Accept': 'application/json'},
            body: JSON.stringify({'name': name,'email': email,'password': password})
        }).then(response => response.json())
        .then(data => {
            if (data['status'] == 200){
                window.location.href = '/index';
            } else if ( data['status'] == 301) {
                exist_msg.classList.remove('hidden');
                exist_msg.classList.add('error-msg');
            }
             else {
                unsuccess_msg.classList.remove('hidden');
                unsuccess_msg.classList.add('error-msg');
            }
        })
    }
}

document.getElementById("register-form").addEventListener('submit', register_function);
