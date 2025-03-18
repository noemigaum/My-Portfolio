// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Image Upload Feature for Projects
document.getElementById("upload").addEventListener("change", function(event) {
    let gallery = document.querySelector(".gallery");
    
    for (let file of event.target.files) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let project = document.createElement("div");
            project.classList.add("project");

            let img = document.createElement("img");
            img.src = e.target.result;

            let description = document.createElement("p");
            description.textContent = "New Project";

            project.appendChild(img);
            project.appendChild(description);
            gallery.appendChild(project);
        };
        reader.readAsDataURL(file);
    }
});