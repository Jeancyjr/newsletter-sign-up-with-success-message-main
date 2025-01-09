const form = document.getElementById("form");
const errorMessage = document.getElementById("errorMessage");
const emailInput = document.getElementById("email");
const firstPanel = document.getElementById("first");
const successMessage = document.getElementById("success-message");
const dismissButton = successMessage.querySelector("button");

function inputError() {
  errorMessage.classList.remove("hidden");
  emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
  emailInput.style.backgroundColor = "hsl(4, 100%, 67%, 20%)";
}

function clearError() {
  errorMessage.classList.add("hidden");
}

function handleForm(e) {
  e.preventDefault(); // Prevent form validation

  // Capture email value
  const emailValue = emailInput.value.trim();

  // error empty field
  if (!emailValue) {
    inputError();
    return;
  }

  // valid email model
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  function validateEmail(emailValue) {
    return emailPattern.test(emailValue);
  }

  // error for valid email pattern
  if (!validateEmail(emailValue)) {
    inputError();
    return;
  }

  clearError();

  // success page
  firstPanel.classList.add("hidden");
  firstPanel.style.display = "none";
  successMessage.removeAttribute("hidden");

  // replace span with email value
    const emailSpan = successMessage.querySelector("span");
    emailSpan.textContent = emailValue;

  // reset form
  dismissButton.addEventListener("click", () => {
    successMessage.setAttribute("hidden", "true");
    firstPanel.classList.remove("hidden");
    firstPanel.style.display = "block";
    firstPanel.resets();
  });
}

form.addEventListener("submit", handleForm);

// const formContainer = document.getElementById('form-container');
// const subForm = document.getElementById("subscription-form");
// const formInput = document.getElementById("email");
// const errorMessage = document.querySelector(".form-field__messages");
// const successMessage = document.getElementById("success-message");
// const resetForm = successMessage.querySelector("button");

// function showError() {
//   errorMessage.classList.toggle("form-field__messages");
// }

// // function clearError() {
// //   errorMessage.classList.remove("form-field__messages");
// // }

// // function isValidEmail(email) {
// //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     return emailPattern.test(email);
// // }

// // function showSuccess() {
  
// // }

// subForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const emailValue = formInput.value.trim();

//   if (!emailValue) {
//     showError();
//     return;
//   }

//   if (!isValidEmail(emailValue)) {
//     showError();
//     return;
//   }

//   clearError();

//   // showSuccess();

//   // Show success message
//   formContainer.classList.add('hidden');
//   successMessage.setAttribute('aria-hidden', 'false');
//   successMessage.removeAttribute('hidden');
//   formContainer.setAttribute('aria-hidden', 'true');

//   // Move focus to the first focusable element in the success panel
//   const successPanelFocusable = successMessage.querySelector('button');
//   if (successPanelFocusable) {
//   successPanelFocusable.focus();
//   }


//   const emailSpan = successMessage.querySelector("span");
//   emailSpan.textContent = emailValue;

//   resetForm.addEventListener("click", () => {
//     successMessage.classList.add('hidden');
//     formContainer.classList.remove('hidden');
//     formContainer.reset();
//   });
// });


