// add event handler with login button
document.getElementById("login-button").addEventListener("click", function () {
  // get email form login page
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  // get password form login page
  const passField = document.getElementById("user-pass");
  const pass = passField.value;

  // verify email and password
  if (email === "baap@mail.com" && pass === "123456") {
    window.location.href = "bank.html";
  } else {
    alert("password ta Vul hoiya gelo");
  }
});
