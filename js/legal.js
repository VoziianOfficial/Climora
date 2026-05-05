"use strict";



document.addEventListener("DOMContentLoaded", () => {
    initLegalSidebarActiveState();
    initLegalAnchorOffset();
});



function initLegalSidebarActiveState() {
    const sidebarLinks = document.querySelectorAll(".legal-sidebar a");
    const sections = Array.from(sidebarLinks)
        .map((link) => {
            const id = link.getAttribute("href");

            if (!id || !id.startsWith("#")) return null;

            const section = document.querySelector(id);

            if (!section) return null;

            return {
                link,
                section
            };
        })
        .filter(Boolean);

    if (!sections.length) return;

    const setActiveLink = () => {
        let current = sections[0];

        sections.forEach((item) => {
            const rect = item.section.getBoundingClientRect();

            if (rect.top <= 150) {
                current = item;
            }
        });

        sidebarLinks.forEach((link) => {
            link.classList.remove("is-active");
        });

        current.link.classList.add("is-active");
    };

    setActiveLink();

    window.addEventListener("scroll", setActiveLink, {
        passive: true
    });
}



function initLegalAnchorOffset() {
    const links = document.querySelectorAll(".legal-sidebar a[href^='#']");

    if (!links.length) return;

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            const id = link.getAttribute("href");
            const target = document.querySelector(id);

            if (!target) return;

            event.preventDefault();

            const headerOffset = 112;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

            window.scrollTo({
                top: targetTop,
                behavior: "smooth"
            });

            history.pushState(null, "", id);
        });
    });
}