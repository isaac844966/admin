"use strict";

const submitForm = function (event) {
  event.preventDefault();
  window.location.href = "dashboard.html";
};

const passwordInput = document.getElementById("password");
const togglePass = document.getElementById("togglePass");

const togglePassVisibility = function () {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  togglePass.textContent = passwordInput.type === "password" ? "SHOW" : "HIDE";
};

togglePass.addEventListener("click", togglePassVisibility);
