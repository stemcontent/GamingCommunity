///light to dark mode and vise versa
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  sunIcon.className =
    sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
  moonIcon.className =
    moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
});

///Login authentication with JS
function auth() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "habiba" && password == "123ha") {
    window.location.assign("userProfile.html");
    window.location("habibamainProfile.html");
    alert("Login Successfully");
  } else if (username == "marwa" && password == "123ma") {
    window.location.assign("marwaProfile.html");
    alert("Login Successfully");
  } else if (username == "seif" && password == "123sa") {
    window.location.assign("seifProfile.html");
    alert("Login Successfully");
  } else if (username == "hassan" && password == "123ha") {
    window.location.assign("hassanProfile.html");
    alert("Login Successfully");
  } else {
    alert("Invalid username or password");
  }
}

//user challenge another user who is a fan of games

function challenge(){
  windows.location.assign("challengePage.html");
}
