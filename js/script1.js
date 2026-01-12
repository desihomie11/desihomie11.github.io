console.log("hello RG");

// FORM LOGIC
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted successfully (not sent yet)");
    });
}

// DARK MODE LOGIC
const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");
    });
}
