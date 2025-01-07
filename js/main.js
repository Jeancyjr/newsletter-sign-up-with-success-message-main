const formContainer = document.getElementById('form-container');
const subForm = document.getElementById("subscription-form");
const formInput = document.getElementById("email");
const errorMessage = document.querySelector(".form-field__messages");
const successMessage = document.getElementById("success-message");
const resetForm = successMessage.querySelector("button");

function showError() {
  errorMessage.classList.toggle("form-field__messages");
}

function clearError() {
  errorMessage.classList.remove("form-field__messages");
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// function showSuccess() {
  
// }

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

  // showSuccess();

  // Show success message
  formContainer.classList.add('hidden');
  successMessage.setAttribute('aria-hidden', 'false');
  successMessage.removeAttribute('hidden');
  formContainer.setAttribute('aria-hidden', 'true');

  // Move focus to the first focusable element in the success panel
  const successPanelFocusable = successMessage.querySelector('button');
  if (successPanelFocusable) {
  successPanelFocusable.focus();
  }


  const emailSpan = successMessage.querySelector("span");
  emailSpan.textContent = emailValue;

  resetForm.addEventListener("click", () => {
    successMessage.classList.add('hidden');
    formContainer.classList.remove('hidden');
    formContainer.reset();
  });
});


