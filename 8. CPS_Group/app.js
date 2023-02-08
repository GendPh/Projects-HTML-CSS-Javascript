const navbar = document.getElementById("secondary-header");
const primaryNavbar = document.getElementById("primary-header");
function openNavbar() {
  const navBarToggle = document.getElementById("toggle-Nav");
  const visible = navBarToggle.getAttribute("data-visible");

  if (visible === "false") {
    navBarToggle.setAttribute("data-visible", "true");
    navBarToggle.setAttribute("aria-expanded", "true");
    navbar.setAttribute("aria-expanded", "true");
  } else if (visible === "true") {
    navBarToggle.setAttribute("data-visible", "false");
    navBarToggle.setAttribute("aria-expanded", "false");
    navbar.setAttribute("aria-expanded", "false");
  }
}

window.onscroll = function () {
  var scroll = window.pageYOffset;
  if (scroll > 10) {
    navbar.style.opacity = '0.8';
    primaryNavbar.style.opacity = '0.8';
  } else if (scroll == 0) {
    navbar.style.opacity = '1';
    primaryNavbar.style.opacity = '1';
  }
}

let validationCheck = {
  firstNameValidation: false,
  lastNameValidation: false,
  emailValidation: false,
  phoneValidation: false,
  subjectValidation: false,
  messageValidation: false
}

let formValues = {
  firstName: "none",
  lastName: "none",
  email: "none",
  phone: "none",
  subject: "none",
  message: "none"
}

function validateFirstName(name) {
  const rule = '^[a-zA-Z]{3,16}$';
  const nameValue = name.value;
  if (nameValue.match(rule)) {
    validationCheck.firstNameValidation = true;
    formValues.firstName = nameValue;
    name.style.borderColor = "green";
  } else {
    validationCheck.firstNameValidation = false;
    formValues.firstName = "error";
    name.style.borderColor = "red";
  }
}

function validateSecondName(name) {
  const rule = '^[a-zA-Z]{3,16}$';
  const nameValue = name.value;
  if (nameValue.match(rule)) {
    validationCheck.lastNameValidation = true;
    formValues.lastName = nameValue;
    name.style.borderColor = "green";
  } else {
    validationCheck.lastNameValidation = false;
    formValues.lastName = "error";
    name.style.borderColor = "red";
  }
}

function validateEmail(email) {
  const emailRule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailValue = email.value;
  if (emailValue.match(emailRule)) {
    validationCheck.emailValidation = true;
    formValues.email = emailValue;
    email.style.borderColor = "green";
  } else {
    validationCheck.emailValidation = false;
    formValues.email = "error";
    email.style.borderColor = "red";
  }
}

function validatePhone(phone) {
  const phoneRule = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
  const phoneValue = phone.value;
  if (phoneValue.match(phoneRule)) {
    validationCheck.phoneValidation = true;
    formValues.phone = phoneValue;
    phone.style.borderColor = "green";
  } else {
    validationCheck.phoneValidation = false;
    formValues.phone = "error";
    phone.style.borderColor = "red";
  }
}

function validateSubject(subject) {
  const subjectRule = /^[0-9a-zA-Z, ]+$/;
  const subjectValue = subject.value;
  if (subjectValue.match(subjectRule)) {
    validationCheck.subjectValidation = true;
    formValues.subject = subjectValue;
    subject.style.borderColor = "green";
  } else {
    validationCheck.subjectValidation = false;
    formValues.subject = "error";
    subject.style.borderColor = "red";
  }
}

function validateMessage(message) {
  const messageRule = /^[0-9a-zA-Z, ]+$/;
  const messageValue = message.value;
  if (messageValue.match(messageRule)) {
    validationCheck.messageValidation = true;
    formValues.message = messageValue;
    message.style.borderColor = "green";
  } else {
    validationCheck.messageValidation = false;
    formValues.message = "error";
    message.style.borderColor = "red";
  }
}

function sendMail() {
  const myEmail = "ferreira_gab98@hotmail.com";
  if (validationCheck.firstNameValidation === true && validationCheck.lastNameValidation === true && validationCheck.emailValidation === true && validationCheck.phoneValidation === true && validationCheck.subjectValidation === true && validationCheck.messageValidation === true) {
    window.open('mailto:' + myEmail + '?subject=' + formValues.subject + ", Nom: " + formValues.firstName + " " + formValues.lastName + ", Téléphone: " + formValues.phone + '&body=' + formValues.message);
  } else {
    changeColor();
  }
}

function changeColor() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("userEmail");
  const userPhone = document.getElementById("userPhone");
  const subject = document.getElementById("subject");
  const userMessage = document.getElementById("userMessage");
  if (validationCheck.firstNameValidation === false) {
    firstName.style.borderColor = "red";
  }
  if (validationCheck.lastNameValidation === false) {
    lastName.style.borderColor = "red";
  }
  if (validationCheck.emailValidation === false) {
    email.style.borderColor = "red";
  }
  if (validationCheck.phoneValidation === false) {
    userPhone.style.borderColor = "red";
  }
  if (validationCheck.subjectValidation === false) {
    subject.style.borderColor = "red";
  }
  if (validationCheck.messageValidation === false) {
    userMessage.style.borderColor = "red";
  }
}

const myLatLng = { lat: 48.82677, lng: 2.62630 };
var mapOptions = {
  center: myLatLng,
  zoom: 12,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

new google.maps.Marker({
  position: myLatLng,
  map,
  title: "12 All. Lech Walesa",
});

const mapClick = document.getElementById("googleMap");
const mapInfoDisplay = document.getElementById("mapInfo");

mapClick.addEventListener("click", function () {
  mapInfoDisplay.setAttribute("aria-expanded", true);
});
mapInfoDisplay.addEventListener("click", function () {
  mapInfoDisplay.setAttribute("aria-expanded", false);
});
