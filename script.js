document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio site loaded!");

    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Animate Skill Circles
    document.querySelectorAll('.circle').forEach(circle => {
        let percent = circle.getAttribute('data-percent');
        let degree = (percent / 100) * 360;
        circle.style.background = `conic-gradient(#ff6600 0deg ${degree}deg, #ddd ${degree}deg 360deg)`;
    });
});
