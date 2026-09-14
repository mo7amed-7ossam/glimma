document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");

    // تأثير التمرير للهيدر
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("shadow-sm", "py-2", "bg-white");
            header.classList.remove("py-3");
        } else {
            header.classList.remove("shadow-sm", "py-2", "bg-white");
            header.classList.add("py-3");
        }
    });

});