"use strict";



document.addEventListener("DOMContentLoaded", () => {
    const service = getCurrentService();

    if (!service) {
        console.warn("No matching service found for this page.");
        return;
    }

    injectServiceFaqSchema(service);
    setServiceActiveLinks(service);
    enhanceServiceCtaLinks(service);
    initServiceImageMotion();
    initServiceCardsMotion();
});



function getCurrentService() {
    const config = window.SITE_CONFIG;

    if (!config || !Array.isArray(config.services)) return null;

    const serviceId = document.body.dataset.serviceId;

    if (serviceId) {
        return config.services.find((service) => service.id === serviceId) || null;
    }

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    return config.services.find((service) => service.href === currentPage) || null;
}



function injectServiceFaqSchema(service) {
    if (!Array.isArray(service.faq) || !service.faq.length) return;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faq.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    const existingSchema = document.querySelector("#service-faq-schema");

    if (existingSchema) {
        existingSchema.remove();
    }

    const script = document.createElement("script");

    script.type = "application/ld+json";
    script.id = "service-faq-schema";
    script.textContent = JSON.stringify(schema);

    document.head.appendChild(script);
}



function setServiceActiveLinks(service) {
    const links = document.querySelectorAll(
        `.desktop-nav a[href="${service.href}"], .mobile-service-links a[href="${service.href}"], .footer-column a[href="${service.href}"]`
    );

    links.forEach((link) => {
        link.setAttribute("aria-current", "page");
    });
}



function enhanceServiceCtaLinks(service) {
    const ctaLinks = document.querySelectorAll('a[href^="contact.html"]');

    ctaLinks.forEach((link) => {
        const href = link.getAttribute("href");

        if (!href) return;

        if (href.includes("service=")) return;

        const url = new URL(href, window.location.href);

        url.searchParams.set("service", service.title);

        link.setAttribute("href", `contact.html?${url.searchParams.toString()}`);
    });
}


function initServiceImageMotion() {
    const mediaBlocks = document.querySelectorAll(".service-hero-media, .service-evaluation-media");

    if (!mediaBlocks.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    mediaBlocks.forEach((block) => {
        const image = block.querySelector("img");

        if (!image) return;

        block.addEventListener("mousemove", (event) => {
            const rect = block.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const moveX = ((x / rect.width) - 0.5) * 8;
            const moveY = ((y / rect.height) - 0.5) * 8;

            image.style.transform = `scale(1.04) translate(${moveX}px, ${moveY}px)`;
        });

        block.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1) translate(0, 0)";
        });
    });
}



function initServiceCardsMotion() {
    const cards = document.querySelectorAll(
        ".service-factor-grid article, .related-service-card, .service-overview-list article, .service-check-list li"
    );

    if (!cards.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    cards.forEach((card) => {
        const icon = card.querySelector("svg");

        card.addEventListener("mouseenter", () => {
            if (icon) {
                icon.style.transform = "translateY(-2px) rotate(-2deg)";
            }
        });

        card.addEventListener("mouseleave", () => {
            if (icon) {
                icon.style.transform = "translateY(0) rotate(0)";
            }
        });
    });
}