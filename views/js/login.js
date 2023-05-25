import { showAlert } from './alert.js'


const login = async (email, password) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:4004/api/v1/users/login',
            data: {
                email,
                password,
            },
        })
        console.log(res)
        console.log("after res")
        if (res.data.status === 'success') {
            showAlert('success', 'Logged in successfully')
            window.setTimeout(() => {
                location.assign('/')
            }, 1500)
            var obj = res.data.data.user
            document.cookie = ' token = ' + JSON.stringify(obj)
            console.log(res)
        }
    } catch (err) {
        console.log(err.message)
        let message = typeof err.response !== 'undefined'
            ? err.response.data.message
            : err.message
        showAlert('error', 'Error: Incorrect email or password', message)
    }
}
document.querySelector('.submit-btn').addEventListener('click', (e) => {
    console.log("click")
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    login(email, password)
})