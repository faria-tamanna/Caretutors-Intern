
localStorage.setItem('token', 'd7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3')

let usersUrl = "https://gorest.co.in/public/v1/users"

let getUsers = () => {
    fetch(usersUrl)
        .then(response => response.json())
        .then(data => {
            buildUsers(data['data'])
        }) 
}

let buildUsers = (users) => {
    let usersWrapper =  document.getElementById('users--wrapper')

    usersWrapper.innerHTML += `
        <h1 style="margin: 0 auto; text-align: center; padding: 2em;">
            Users
        </h1>
    `


    for(let i = 0; i < users.length; i++) {
        let user = users[i]
        
        let userCard = `
            <div class="user--card" style="display: grid; grid-template-columns:1fr 3fr; gap: 2em; margin-top: 2em; padding: 1em;">

                <div class="card--header" style="display: flex; align-items: center; gap: 2em;">
                    <h1>${user.name}</h1>
                    <h3>${user.id}</h3>
                    <h3>${user.email}</h3>
                    <h4>${user.gender}</h4>
                    <h4>${user.status}</h4>
                </div>
            </div>
        `
        usersWrapper.innerHTML += userCard
    }
}


fetchBtn = document.getElementById('fetch-btn')

fetchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getUsers()
})



