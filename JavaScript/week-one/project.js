let username = prompt("Enter your username");

console.log(ValidateUsername(username));

function ValidateUsername(username) {
  if (username == null) {
    return false;
  }

  if (username.length > 10) {
    return false;
  } else {
    return true;
  }
}
