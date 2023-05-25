import { showAlert } from './alert.js'
console.log(document.cookie)
var obj = JSON.parse(document.cookie.substring(6))
console.log(obj)


var user = document.querySelector(".user-info")
var profile = document.querySelector(".profile-img")
user.innerHTML = `<p class="name">${obj.name}</p><p class="email">${obj.email}</p>`
profile.innerHTML = `<img src="img/profile/user.png" alt="">`



var logoutbtn = document.querySelector('.logout-btn')

logoutbtn.addEventListener('click', (e) => {
    logout()
})
const logout = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:4004/api/v1/users/logout',
        })
        if (res.data.status === 'successs') {
            location.reload('/')
        }
    } catch (err) {
        console.log(err)
        showAlert('error', 'Error logging out! Try again.')
    }
}