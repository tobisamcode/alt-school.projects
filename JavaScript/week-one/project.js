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
  while (password != passwordConfirm) {
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

const ussersDB = {
  tobisam2000: {
    firstName: "Tobi",
    lastName: "Adesokan",
    accountActivated: true,
    email: "samuel@gmail.com",
    password: "12222@333"
  },
  ade234: {
    firstName: "Ade",
    lastName: "Okiki",
    accountActivated: false,
    email: "oki@gmail.com",
    password: "ade@333"
  },
  "chike@3": {
    firstName: "Chike",
    lastName: "Chuku",
    accountActivated: true,
    email: "chi@gmail.com",
    password: "chike@333"
  },
  ada333: {
    firstName: "Adaobi",
    lastName: "Humpson",
    accountActivated: false,
    email: "adaobi22@gmail.com",
    password: "12aeee@333"
  }
};
