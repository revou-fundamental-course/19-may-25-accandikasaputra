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
  const userMessage = document.getElementById("message-content").value.trim();

  if (!name || !userMessage) {
    alert("Please fill in all fields.");
    return;
  }

  // Tampilkan ringkasan di halaman (jika tetap ingin ditampilkan)
  const summary = `Name: ${name}\nMessage: ${userMessage}`;
  document.getElementById("user-message").textContent = summary;

  // Kirim ke WhatsApp
  const waNumber = "6281212707907"; // ganti dengan nomor WA kamu
  const waMessage = `Hello, here's a message from the website:\n\n${summary}`;
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  window.open(waUrl, "_blank");
});
