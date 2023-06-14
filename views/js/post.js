import { showAlert } from './alert.js'


const submitBtn = document.getElementById('submitBtn')

console.log(document.cookie)
var obj = JSON.parse(document.cookie.substring(6))
const user = obj.name

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const location = document.getElementById("location").value
    const passenger = document.getElementById("passengers").value
    const destination = document.getElementById('Destination').value
    const time = document.getElementById("time").value
    postRide(destination, passenger, user, location, time)
})


const postRide = async (destination, passengers, userName, startingLocation, departureTime) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:4008/api/v1/rides',
            data: {
                destination,
                passengers,
                userName,
                startingLocation,
                departureTime
            },
        })
        if (res.data.status === 'success') {
            window.location = "/ride"
        }
    } catch (err) {
        console.log(err)
        showAlert('error', 'Error posting Ride! Try again.')
    }

}