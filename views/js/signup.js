// import axios from 'axios'
import { showAlert } from './alert.js'

export const signup = async (name, email, password, passwordConfirm, role) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:4004/api/v1/users/signup',
            data: {
                name,
                email,
                password,
                passwordConfirm,
                role,
            },
        })
        console.log(res)
        if (res.data.status === 'success') {
            showAlert('success', 'Account created successfully!')
            window.setTimeout(() => {
                location.assign('/login')
            }, 1500)
        }
    } catch (err) {
        let message = typeof err.response !== 'undefined'
            ? err.response.data.message
            : err.message
        showAlert('error', 'Error: Passwords are not the same!', message)
    }
}

document.querySelector('.signup-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const passwordConfirm = document.getElementById('passwordConfirm').value
    const role = "passenger"
    console.log(name, email, password, passwordConfirm, role)
    signup(name, email, password, passwordConfirm, role)
})