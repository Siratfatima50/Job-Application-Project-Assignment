function showAlert() {
    alert("Welcome to the Job Application Portal!");
  }
  
  function submitContactForm() {
    alert("Your message has been sent!");
  }
  
  function loginUser() {
    alert("Login successful!");
  }
  
  function registerUser() {
    alert("Registration successful!");
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("bg-gray-900");
  }
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function clearForm() {
    document.querySelectorAll("input, textarea").forEach(input => input.value = "");
  }
  
  function showPassword(inputId) {
    const input = document.getElementById(inputId);
    input.type = input.type === "password" ? "text" : "password";
  }
  
  function redirectTo(page) {
    window.location.href = page;
  }
  
  function showPopup(message) {
    alert(message);
  }
  