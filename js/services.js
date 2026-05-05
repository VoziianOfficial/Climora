"use strict";



document.addEventListener("DOMContentLoaded", () => {
    initServicesHeroMotion();
    initCatalogCardMotion();
    injectServicesFaqSchema();
});



function initServicesHeroMotion() {
    const visual = document.querySelector(".services-hero-visual");
    const image = document.querySelector(".services-hero-visual img");

    if (!visual || !image) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    visual.addEventListener("mousemove", (event) => {
        const rect = visual.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX = ((x / rect.width) - 0.5) * 10;
        const moveY = ((y / rect.height) - 0.5) * 10;

        image.style.transform = `scale(1.045) translate(${moveX}px, ${moveY}px)`;
    });

    visual.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1) translate(0, 0)";
    });
}



function initCatalogCardMotion() {
    const cards = document.querySelectorAll(".catalog-service-card");

    if (!cards.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    cards.forEach((card) => {
        const icon = card.querySelector(".catalog-service-icon");
        const linkIcon = card.querySelector(".catalog-link-text svg");

        card.addEventListener("mouseenter", () => {
            if (icon) {
                icon.style.transform = "translateY(-2px) rotate(-2deg)";
            }

            if (linkIcon) {
                linkIcon.style.transform = "translateX(4px)";
            }
        });

        card.addEventListener("mouseleave", () => {
            if (icon) {
                icon.style.transform = "translateY(0) rotate(0)";
            }

            if (linkIcon) {
                linkIcon.style.transform = "translateX(0)";
            }
        });
    });
}


function injectServicesFaqSchema() {
    const page = document.body.dataset.page;

    if (page !== "services") return;

    const faq = [
        {
            question: "Which HVAC category should I choose?",
            answer:
                "Choose the category closest to your current need. If the system is not working as expected, HVAC Repair may fit. If you are planning a new or replacement system, HVAC Installation may be better."
        },
        {
            question: "Does Climora send its own HVAC technicians?",
            answer:
                "No. Climora is an independent matching platform. It does not perform HVAC services directly and does not send its own technicians."
        },
        {
            question: "Can provider availability change by season?",
            answer:
                "Yes. Heating and cooling demand can change by season, weather, ZIP code, provider schedule, and service category."
        },
        {
            question: "What should I verify before hiring a provider?",
            answer:
                "Homeowners should verify licenses, insurance, qualifications, written scope, quote terms, warranty details, and any required permits before hiring."
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    const existingSchema = document.querySelector("#services-faq-schema");

    if (existingSchema) {
        existingSchema.remove();
    }

    const script = document.createElement("script");

    script.type = "application/ld+json";
    script.id = "services-faq-schema";
    script.textContent = JSON.stringify(schema);

    document.head.appendChild(script);
}