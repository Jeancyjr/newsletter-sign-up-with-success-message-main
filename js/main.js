const subForm = document.getElementById("subscription-form");
const formInput = document.getElementById("email");
const errorMessage = document.querySelector(".form-field__messages");
const successMessage = document.getElementById("success-message");
const resetForm = successMessage.querySelector("button");

function showError() {
  errorMessage.classList.toggle("show-error");
  formInput.style.borderColor = "var(--Color-Tomato)";
  formInput.style.backgroundColor = "hsl(4, 100%, 67%, 10%";
}

function clearError() {
  errorMessage.classList.remove("show-error");
  formInput.style.borderColor = "var(--Color-Dark-Slate-Grey)";
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function showSuccess() {
  subForm.parentElement.style.display = "none";
  successMessage.style.display = "block";
}

subForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = formInput.value.trim();

  if (!emailValue) {
    showError();
    return;
  }

  if (!isValidEmail(emailValue)) {
    showError();
    return;
  }

  clearError();

  showSuccess()

  const emailSpan = successMessage.querySelector("span");
  emailSpan.textContent = emailValue;

  resetForm.addEventListener("click", () => {
    successMessage.style.display = "none";
    subForm.parentElement.style.display = "block";
    subForm.reset();
  });
});


