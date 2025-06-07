const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  message.textContent = "Sending...";
  setTimeout(() => {
    message.textContent = "Thanks! We'll get back to you soon 💌";
  }, 1500);
});
