const getUsers = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:4008/api/v1/users',
        })
        displayUsers(res.data.data)
    } catch (err) {
        console.log(err)
        showAlert('error', 'Error logging out! Try again.')
    }
}
getUsers()
function displayUsers(users) {
    users.forEach(user => {
        console.log(user.role)
        const name = `<p>${user.name}</p>`
        const email = `<p>${user.email}</p>`

        if (user.role == "passenger") {
            document.getElementById('userName').innerHTML += name
            document.getElementById('userEmail').innerHTML += email
        } else if (user.role == 'drivers') {
            document.getElementById("driverName").innerHTML += name
            document.getElementById("driverEmail").innerHTML += email
        }
    });
}