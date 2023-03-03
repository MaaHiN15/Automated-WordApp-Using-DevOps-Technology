async function login_function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch("/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json",
        'Accept': 'application/json' },
        body: JSON.stringify({ 
            'email': email,
            'password': password
        })
    });
};
document.getElementById("login").addEventListener('click', login_function);
