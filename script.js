const form = document.getElementById("registrationForm");
const message = document.getElementById("formMessage");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const setMessage = (text, type) => {
  message.textContent = text;
  message.dataset.type = type || "";
};

const clearPasswordValidity = () => {
  confirmPassword.setCustomValidity("");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  setMessage("", "");
  clearPasswordValidity();

  if (!form.checkValidity()) {
    form.reportValidity();
    setMessage("Please complete the required fields.", "error");
    return;
  }

  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match.");
    confirmPassword.reportValidity();
    setMessage("Passwords do not match.", "error");
    return;
  }

  setMessage("Registration complete. Welcome aboard!", "success");
  form.reset();
});

form.addEventListener("input", () => {
  if (message.textContent) {
    setMessage("", "");
  }
  clearPasswordValidity();
});
