document.getElementById("upload").addEventListener("change", function(event) {
    let gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Clear previous images
    for (let file of event.target.files) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let img = document.createElement("img");
            img.src = e.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
