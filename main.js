var typed= new Typed(".text",{
    strings:["Programmer","Front-End Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
// Tambahkan script ini pada main.js
document.addEventListener("scroll", function () {
    let scroll_position = window.scrollY;
    if (scroll_position > 250) {
        // Tambahkan kelas 'active' pada elemen yang ingin dianimasikan
        document.querySelector(".home-content").classList.add("active");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});
