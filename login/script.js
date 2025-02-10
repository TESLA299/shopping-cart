const loginform = document.querySelector("#login_form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const accept = document.querySelector("#accept");
const emailerror = document.querySelector("#error");
const passworderror = document.querySelector("#error1");
loginform.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!email.value.length) {
    emailerror.innerText = "Email is required";
    emailerror.classList.add("border-red-500");
  } else if (email.value.length) {
    emailerror.innerText = "";
    emailerror.classList.remove("border-red-500");
  }
  if (password.value.length < 5) {
    passworderror.innerText = "Password must be at least 6 character then";
    passworderror.classList.add("border-red-500");
  } else if (email.value.length) {
    passworderror.innerText = "";
    passworderror.classList.remove("border-red-500");
  }
  if (email.value.length && password.value.length > 5) {
    const loginData = {
      email: email.value,
      password: password.value,
    };
    localStorage.setItem("email", JSON.stringify(loginData));
    window.location.href = "/";
  }
});
