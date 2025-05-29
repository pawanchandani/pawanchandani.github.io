// Toggle dark mode
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Handle contact form (fake submission)
function handleForm(e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you shortly.");
}
