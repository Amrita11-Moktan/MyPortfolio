const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if(name === "" || email === "" || message === "")
{
formMessage.textContent = "❌ Invalid! Please fill all fields.";
formMessage.style.color = "red";
}
else
{
formMessage.textContent = "✅ Message Sent Successfully!";
formMessage.style.color = "green";

form.reset();
}

});