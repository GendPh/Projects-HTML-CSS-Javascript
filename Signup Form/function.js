const btn_register = document.getElementById("btn-register");
const btn_login = document.getElementById("btn-login");

const register_form = document.getElementById("form-register");
const login_form = document.getElementById("form-login");



btn_login.addEventListener("click", function () {
  btn_login.classList.replace("btn-disable", "btn-active");
  btn_register.classList.replace("btn-active", "btn-disable");

  register_form.classList.replace("active", "disable");
  login_form.classList.replace("disable", "active");
});

btn_register.addEventListener("click", function () {
  btn_register.classList.replace("btn-disable", "btn-active");
  btn_login.classList.replace("btn-active", "btn-disable");

  login_form.classList.replace("active", "disable");
  register_form.classList.replace("disable", "active");
});


