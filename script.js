const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("form-message");

// Dark Mode Toggle
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Contact Form Validation
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
        formMessage.textContent = "Please fill out all fields!";
        return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";

    form.reset();
});
