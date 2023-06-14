function popup(ride) {
    console.log("TRIAL")
}

const getDriver = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:4008/api/v1/driver',
        });
        displayDriver(res.data.data);
    } catch (err) {
        console.log(err);
        showAlert('error', 'Error logging out! Try again.');
    }
};


const displayDriver = (drivers) => {
    drivers.forEach((driver) => {
        const wrapper = document.getElementById("applicationWrapper")
        wrapper.innerHTML += ` <div class="application">
        <div>
          <p>Name: ${driver.name}</p>
          <p>Contact: ${driver.contactNumber}</p>
        </div>
        <div>
          <p>Email: ${driver.email}</p>
          <p>License Number: ${driver.licenseNumber}</p>
        </div>
        <div class="btnWrap">
          <div class="detailBtn btn" onclick = 'popup(this)'>Details</div>
          <div class="deleteBtn btn">Delete</div>
        </div>
        <div class="tab"></div>
        </div>`
    });
};


getDriver()

