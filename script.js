
/* =====================================
   ABDULQODIR MILL
   WEBSITE JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    // 1. COMPANY CONFIGURATION
    const company = window.COMPANY || {};

    // 2. LANGUAGE SYSTEM
    const languageSelect = document.querySelector(".language-select");

    const translations = {
        uz: {
            "Sifat an'anadan boshlanadi.": "Sifat an'anadan boshlanadi."
        },
        ru: {
            "Sifat an'anadan boshlanadi.": "Качество начинается с традиций."
        },
        en: {
            "Sifat an'anadan boshlanadi.": "Quality begins with tradition."
        }
    };

    function changeLanguage(lang) {
        document.documentElement.lang = lang;

        document.querySelectorAll("[data-uz]").forEach(function (element) {
            const translation = element.getAttribute("data-" + lang);

            if (translation !== null) {
                element.textContent = translation;
            }
        });

        if (company.slogan && company.slogan[lang]) {
            document.querySelectorAll(".company-slogan").forEach(function (element) {
                element.textContent = company.slogan[lang];
            });
        }

        localStorage.setItem("abdulqodir-language", lang);

        if (languageSelect) {
            languageSelect.value = lang;
        }
    }

    const savedLanguage =
        localStorage.getItem("abdulqodir-language") || "uz";

    changeLanguage(savedLanguage);

    if (languageSelect) {
        languageSelect.addEventListener("change", function () {
            changeLanguage(this.value);
        });
    }

    // 3. MOBILE MENU
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("active");

            const isOpen = navigation.classList.contains("active");
            menuButton.setAttribute("aria-expanded", String(isOpen));
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    // 4. COMPANY NAME
    document.querySelectorAll("[data-company-name]").forEach(function (element) {
        element.textContent = company.name || "ABDULQODIR MILL";
    });

    // 5. COMPANY PHONE
    document.querySelectorAll("[data-company-phone]").forEach(function (element) {
        element.textContent = company.phone || "+998 XX XXX XX XX";
    });

    // 6. COMPANY EMAIL
    document.querySelectorAll("[data-company-email]").forEach(function (element) {
        element.textContent = company.email || "info@abdulqodirmill.uz";
    });

    // 7. FOOTER YEAR
    document.querySelectorAll("[data-current-year]").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // 8. SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    console.log("ABDULQODIR MILL website loaded successfully.");
});
