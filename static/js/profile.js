async function profile(e){
    e.preventDefault();

    const name = document.getElementById('profile-name');
    const email = document.getElementById('profile-email');
    const phone_no = document.getElementById('profile-phoneno');

    const data = await fetch("/profile", {
        method: 'GET',
        headers: {"Content-Type": "application/json",'Accept': 'application/json'},
    })
    .then(response => response.json())
    .then(data => data);

    name.innerHTML = data['name'].toUpperCase();
    email.innerHTML = data['email'];
    phone_no.innerHTML= data['phone_no'];
}



document.getElementById('profile-touch').addEventListener("click", profile)
