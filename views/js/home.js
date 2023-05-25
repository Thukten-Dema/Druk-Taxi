var obj
if (document.cookie) {
    console.log(document.cookie)
    obj = JSON.parse(document.cookie.substring(6))
    console.log(obj)
    console.log(document.cookie)
} else {
    obj = JSON.parse('{}')
}


// Adding dynamic elements to the home page

var el = document.querySelector('.login-wrapper')
if (obj._id) {
    el.innerHTML = ' <a href="/profile" class="profile"><span class="material-symbols-outlined">account_circle</span></a>'

} else {
    el.innerHTML =
        '<a href="login.html" class="login">Login</a><a href="/signup" class="Signup">Sign Up</a>'
}