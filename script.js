document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMsg').textContent = "Thanks for reaching out! I'll get back to you soon.";
  this.reset();
});
