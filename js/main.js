document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle-island");
    const mobileMenu = document.getElementById("mobile-menu");
    const allLinks = document.querySelectorAll("#desktop-nav-island a, #mobile-menu a, #header-cta-island");

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

    // التحكم في زر قائمة الجوال (فتح وإغلاق)
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle("hidden");
        });

        // إغلاق القائمة عند الضغط في أي مكان خارجها
        document.addEventListener("click", (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenu.classList.add("hidden");
            }
        });
    }

    // التمرير السلس للروابط وإغلاق قائمة الموبايل عند اختيار رابط
    allLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");

            if (targetId && targetId.startsWith("#") && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerHeight = header.offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

                    window.scrollTo({
                        top: elementPosition - headerHeight - 10,
                        behavior: "smooth"
                    });
                }
            }

            // إغلاق قائمة الجوال بعد الضغط على أي رابط بداخلها
            if (mobileMenu) {
                mobileMenu.classList.add("hidden");
            }
        });
    });
});