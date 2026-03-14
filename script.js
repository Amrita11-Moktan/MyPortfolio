// Change Home Text
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("homeDesc").innerText =
    "I love building websites and mobile apps using JavaScript and Flutter.";
});

// Reset Home Text
document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("homeDesc").innerText =
    "Frontend Developer & Student";
});

// Change Profile Image when clicked
const img = document.getElementById("profileImg");
img.addEventListener("click", function () {
  img.src = "images/profile2.png"; // add another image
});

// Contact Form Functionality
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let status = document.getElementById("formStatus");

  if (name === "" || email === "" || message === "") {
    status.textContent = "❌ Please fill all fields.";
    status.style.color = "red";
  } else {
    status.textContent = "✅ Message sent successfully!";
    status.style.color = "green";

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    document.getElementById("contactForm").reset();
  }
});