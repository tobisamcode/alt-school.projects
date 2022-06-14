function displayUserDetails() {
  // enter username
  let username = prompt("Enter your username");
  while (ValidateUsername(username) == false) {
    username = prompt("Username not valid, Please enter a valid username");
  }
  if (username == null) {
    return;
  }
  // enter password
  let password = prompt("Enter your password");
  while (ValidatePassword(password) == false) {
    password = prompt("Password is not valid, Plaese enter a valid password");
  }
  if (password == null) {
    return;
  }

  // confirm password
  let passwordConfirm = prompt("Confirm your password");
  while (ValidatePasswordConfirm(password, passwordConfirm) == false) {
    passwordConfirm = prompt("incorrectly, password doesn't match");
    if (passwordConfirm == null) {
      return;
    }
  }
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

function ValidatePasswordConfirm(password, passwordConfirm) {
  if (passwordConfirm == null) {
    return true;
  }
  if (password != passwordConfirm) {
    return false;
  } else {
    return true;
  }
}
