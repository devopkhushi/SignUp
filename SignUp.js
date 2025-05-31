function validateForm() {
  let user = document.getElementById("userid");
  let pass = document.getElementById("password");
  let isValid = true;

  // User ID check
  if (user.value.trim() === "") {
    document.getElementById("userError").style.display = "block";
    user.classList.add("error");
    isValid = false;
  } else {
    document.getElementById("userError").style.display = "none";
    user.classList.remove("error");
  }

  // Password check
  if (pass.value.trim() === "") {
    document.getElementById("passError").style.display = "block";
    pass.classList.add("error");
    isValid = false;
  } else {
    document.getElementById("passError").style.display = "none";
    pass.classList.remove("error");
  }

  return isValid;
}
