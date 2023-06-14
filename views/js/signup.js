// import axios from 'axios'
import { showAlert } from './alert.js'

export const signup = async (name, email, contactNumber, licenseNumber, password, passwordConfirm) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:4008/api/v1/driver/',
            data: {
                name,
                email,
                contactNumber,
                licenseNumber,
                password,
                passwordConfirm
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
        showAlert('error', err)
    }
}

document.querySelector('.signup-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const contactNumber = document.getElementById("contactNumber").value
    const licenseNumber = document.getElementById("licenseNumber").value
    const password = document.getElementById('password').value
    const passwordConfirm = document.getElementById('passwordConfirm').value
    console.log(name, email, contactNumber, licenseNumber, password, passwordConfirm)
    signup(name, email, contactNumber, licenseNumber, password, passwordConfirm)
})