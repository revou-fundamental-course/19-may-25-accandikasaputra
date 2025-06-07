// Set name in welcome message
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  let name = urlParams.get("user-name");

  if (!name) {
    name = prompt("What's your name?") || "Guest";
    // Tambahkan ke URL tanpa reload
    urlParams.set("user-name", name);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }

  document.getElementById("user-name").textContent = name;

  // Set info browser & waktu
  document.getElementById("browser-info").textContent = navigator.userAgent;
  document.getElementById("timestamp").textContent = new Date().toString();
};


// Handle form submission
const form = document.getElementById("message-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const message = document.getElementById("message-content").value.trim();

  if (!name || !dob || !gender || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const summary = `Name: ${name}\nDOB: ${dob}\nGender: ${gender}\nMessage: ${message}`;
  document.getElementById("user-message").textContent = summary;
});
