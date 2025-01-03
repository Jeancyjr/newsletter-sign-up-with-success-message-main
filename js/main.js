const subscriptionForm = document.getElementById("subscription-form");
const emailInput = document.getElementById("email");
const formFieldMessages = document.querySelector(".form-field__messages");
const successMessageSection = document.getElementById("success-message");
const subscribeBtn = document.querySelector("btn");
const dismissButton = successMessageSection.querySelector("button");


function showError(message) {
  formFieldMessages.textContent = message;
  formFieldMessages.style.color = "var(--Color-Tomato)";
  emailInput.style.borderColor = "var(--Color-Tomato)";
}


function clearError() {
  formFieldMessages.textContent = "";
  emailInput.style.borderColor = "var(--Color-Dark-Slate-Grey)";
}


function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}


subscriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  if (!emailValue) {
    showError("Please enter your email address.");
    return;
  }

  if (!isValidEmail(emailValue)) {
    showError("Valid email address required!");
    return;
  }

  clearError();


  subscriptionForm.parentElement.style.display = "none";
  successMessageSection.style.display = "block";

  
  const emailSpan = successMessageSection.querySelector("span");
  emailSpan.textContent = emailValue;
});


dismissButton.addEventListener("click", () => {
 
  successMessageSection.style.display = "none";
  subscriptionForm.parentElement.style.display = "block";
  subscriptionForm.reset();
});
