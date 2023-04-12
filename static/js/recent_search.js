function clicked(e){
    e.preventDefault();
    fetch("/recent-search", {
        method: "POST",
        redirect: "follow",
        headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
        body: JSON.stringify({ 'word' : this.innerHTML })
    })
    .then(response => response.json())
        .then(data => {
            if (data['status'] == 200) {
                window.location.href = '/main';
            }
        })

}

document.querySelectorAll('.tab-name').forEach(elem => elem.addEventListener('click', clicked))
