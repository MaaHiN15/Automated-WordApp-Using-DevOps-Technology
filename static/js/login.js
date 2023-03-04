async function login_function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    db_msg = document.getElementById('msg')
    console.log("request comes in login")

    await fetch("/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({ 'email': email, 'password': password })
    })
        .then(response => response.json())
        .then(data => {
            if (data['status'] == 200) {
                window.location.href = '/index';
            } else {
                db_msg.classList.remove('hidden');
                db_msg.classList.add('error-msg');
            }
        })
};
document.getElementById("login").addEventListener('click', login_function);
