"use strict";



document.addEventListener("DOMContentLoaded", () => {
    initHomeHeroParallax();
    initHomeRequestCardTilt();
    initHomeComfortMotion();
});



function initHomeHeroParallax() {
    const hero = document.querySelector(".home-hero");
    const heroImage = document.querySelector(".home-hero-bg img");

    if (!hero || !heroImage) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let ticking = false;

    const updateParallax = () => {
        const heroRect = hero.getBoundingClientRect();
        const progress = Math.min(Math.max(-heroRect.top / heroRect.height, 0), 1);
        const translateY = progress * 28;

        heroImage.style.transform = `scale(1.04) translateY(${translateY}px)`;
        ticking = false;
    };

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        },
        {
            passive: true
        }
    );

    updateParallax();
}



function initHomeRequestCardTilt() {
    const card = document.querySelector(".hero-request-card");

    if (!card) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const resetCard = () => {
        card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    };

    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 5;
        const rotateX = ((y / rect.height) - 0.5) * -5;

        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    });

    card.addEventListener("mouseleave", resetCard);
    card.addEventListener("blur", resetCard, true);
}



function initHomeComfortMotion() {
    const section = document.querySelector(".home-comfort");
    const image = document.querySelector(".comfort-media img");

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