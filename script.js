document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio site loaded!");

    // Open Modal Function
    window.openModal = function(imageSrc, title, description) {
        document.getElementById("modalImage").src = imageSrc;
        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalDescription").innerText = description;
        document.getElementById("projectModal").style.display = "block";
    };

    // Close Modal Function
    window.closeModal = function() {
        document.getElementById("projectModal").style.display = "none";
    };
});
