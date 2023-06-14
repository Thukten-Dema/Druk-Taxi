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
    console.log("LOGGIN OUT")
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:4008/api/v1/users/logout',
        })
        if (res.data.status === 'success') {
            window.location = "/"
        }
    } catch (err) {
        console.log(err)
        showAlert('error', 'Error logging out! Try again.')
    }
}


const getRides = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:4008/api/v1/rides',
        })
        showRides(res.data.data.ride1)
    } catch (err) {
        console.log(err)
        showAlert('error', 'Error logging out! Try again.')
    }
}
function generateCardHTML(card) {
    return `
      <div class="rideCard">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113271.10287061597!2d89.56408054781339!3d27.477913997284503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e19419962037b7%3A0x7c01ffe2660560d1!2sThimphu!5e0!3m2!1sen!2sbt!4v1686330456367!5m2!1sen!2sbt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="card-content">
          <div class="cardHeader">
            <span>Destination: </span>
            <span id="Destination">${card.destination}</span>
          </div>
          <div class="card-details">
            <div class="name">
              <span>Name: </span>
              <span>${card.userName}</span>
            </div>
            <div class="startingLocation">
              <span>Starting Location: </span>
              <span>${card.startingLocation}</span>
            </div>
            <div class="time">
              <span>Departure Time: </span>
              <span>${card.departureTime}</span>
            </div>
            <div class="passengers">
              <span>No. of passengers: </span>
              <span>${card.passengers}</span>
            </div>
          </div>
          <div class="button-wrapper">
            <div class="button">
              <p>Book Now</p>
            </div>
          </div>
        </div>
      </div>
    `;
}
const cardWrap = document.getElementById("cardWrapper")

function showRides(rides) {
    console.log(rides)
    rides.forEach(ride => {
        if (ride.userName == obj.name) {
            const card = generateCardHTML(ride)
            cardWrap.innerHTML += card
        }
    });
}

getRides()