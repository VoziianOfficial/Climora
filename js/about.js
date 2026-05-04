"use strict";

/* ==========================================================
   CLIMORA — ABOUT PAGE SCRIPT
   File: /js/about.js

   Handles:
   - about hero image soft motion
   - about model image scroll motion
   - subtle card interaction
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initAboutHeroMotion();
    initAboutModelScrollMotion();
    initAboutCardsMotion();
});

/* =========================
   HERO IMAGE MOTION
   ========================= */

function initAboutHeroMotion() {
    const card = document.querySelector(".about-hero-card");
    const image = document.querySelector(".about-hero-image img");

    if (!card || !image) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX = ((x / rect.width) - 0.5) * 8;
        const moveY = ((y / rect.height) - 0.5) * 8;

        image.style.transform = `scale(1.04) translate(${moveX}px, ${moveY}px)`;
    });

    card.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1) translate(0, 0)";
    });
}

/* =========================
   MODEL IMAGE SCROLL MOTION
   ========================= */

function initAboutModelScrollMotion() {
    const section = document.querySelector(".about-model-section");
    const image = document.querySelector(".about-model-visual img");

    if (!section || !image) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let ticking = false;

    const updateMotion = () => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.bottom < 0 || rect.top > viewportHeight) {
            ticking = false;
            return;
        }

        const sectionMiddle = rect.top + rect.height / 2;
        const screenMiddle = viewportHeight / 2;
        const distance = sectionMiddle - screenMiddle;
        const translateY = Math.max(Math.min(distance * -0.025, 12), -12);

        image.style.transform = `scale(1.035) translateY(${translateY}px)`;
        ticking = false;
    };

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                window.requestAnimationFrame(updateMotion);
                ticking = true;
            }
        },
        {
            passive: true
        }
    );

    updateMotion();
}

/* =========================
   CARD MICRO MOTION
   ========================= */

function initAboutCardsMotion() {
    const cards = document.querySelectorAll(
        ".about-help-grid article, .about-story-notes article, .about-principles-list article"
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