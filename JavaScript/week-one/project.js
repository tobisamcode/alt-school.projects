let username = prompt("Enter your username");

function ValidateUsername(username) {
  if (username.length > 10) {
    return false;
  } else {
    return true;
  }
}
