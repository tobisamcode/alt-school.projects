function displayUserDetails() {
  let username = prompt("Enter your username");
  while (ValidateUsername(username) == false) {
    username = prompt("Username not valid, Please enter a valid username");
  }

  let password = prompt("Enter your password");
  while (ValidatePassword(password) == false) {
    password = prompt("Password is not valid, Plaese enter a valid password");
  }

  console.log(username, password);
}

displayUserDetails();
alert("you have come to the end of the programm");

function ValidateUsername(username) {
  if (username == null) {
    return true;
  }

  if (username.length > 10) {
    return false;
  } else {
    return true;
  }
}

function ValidatePassword(password) {
  if (password == null) {
    return true;
  }

  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}
