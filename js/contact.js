"use strict";

/* ==========================================================
   CLIMORA — CONTACT PAGE SCRIPT
   File: /js/contact.js

   Handles:
   - prefill form from URL params
   - contact form validation
   - styled status messages
   - contact card micro interactions
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    prefillContactFormFromUrl();
    initContactForm();
    initContactCardMotion();
});

/* =========================
   PREFILL FROM URL
   ========================= */

function prefillContactFormFromUrl() {
    const form = document.querySelector("[data-contact-form]");

    if (!form) return;

    const params = new URLSearchParams(window.location.search);
    const zip = params.get("zip");
    const service = params.get("service");

    const zipInput = form.querySelector('[name="zip"]');
    const serviceSelect = form.querySelector('[name="service"]');

    if (zip && zipInput) {
        zipInput.value = zip;
    }

    if (service && serviceSelect) {
        const matchingOption = Array.from(serviceSelect.options).find((option) => {
            return option.value.toLowerCase() === service.toLowerCase();
        });

        if (matchingOption) {
            serviceSelect.value = matchingOption.value;
        }
    }
}

/* =========================
   CONTACT FORM
   ========================= */

function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    const status = document.querySelector("[data-form-status]");

    if (!form || !status) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const fields = {
            name: form.querySelector('[name="name"]'),
            email: form.querySelector('[name="email"]'),
            phone: form.querySelector('[name="phone"]'),
            zip: form.querySelector('[name="zip"]'),
            service: form.querySelector('[name="service"]'),
            message: form.querySelector('[name="message"]'),
            consent: form.querySelector('[name="consent"]')
        };

        clearContactErrors(fields);

        const errors = validateContactFields(fields);

        if (errors.length) {
            showStatus(status, errors[0], "error");
            return;
        }

        showStatus(
            status,
            "Your request details are ready. Connect this form to your backend or form service to send submissions.",
            "success"
        );

        form.reset();
    });
}

function validateContactFields(fields) {
    const errors = [];

    if (!fields.name.value.trim()) {
        setFieldError(fields.name);
        errors.push("Please enter your full name.");
    }

    if (!isValidEmail(fields.email.value)) {
        setFieldError(fields.email);
        errors.push("Please enter a valid email address.");
    }

    if (!fields.phone.value.trim()) {
        setFieldError(fields.phone);
        errors.push("Please enter your phone number.");
    }

    if (!isValidZip(fields.zip.value)) {
        setFieldError(fields.zip);
        errors.push("Please enter a valid 5-digit ZIP code.");
    }

    if (!fields.service.value) {
        setFieldError(fields.service);
        errors.push("Please select a service type.");
    }

    if (!fields.message.value.trim() || fields.message.value.trim().length < 12) {
        setFieldError(fields.message);
        errors.push("Please add a short description of the HVAC request.");
    }

    if (!fields.consent.checked) {
        const customCheck = fields.consent
            .closest(".form-check")
            ?.querySelector(".form-check-custom");

        setFieldError(customCheck);
        errors.push("Please confirm that Climora is a matching platform.");
    }

    return errors;
}

function clearContactErrors(fields) {
    Object.values(fields).forEach((field) => {
        if (!field) return;

        field.classList.remove("is-invalid");
        field.removeAttribute("aria-invalid");
    });

    const customChecks = document.querySelectorAll(".form-check-custom");

    customChecks.forEach((check) => {
        check.classList.remove("is-invalid");
        check.removeAttribute("aria-invalid");
    });
}

function setFieldError(field) {
    if (!field) return;

    field.classList.add("is-invalid");
    field.setAttribute("aria-invalid", "true");
}

function isValidEmail(value) {
    const email = value.trim();

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidZip(value) {
    const zip = value.trim();

    return /^\d{5}$/.test(zip);
}

function showStatus(status, message, type) {
    status.textContent = message;
    status.classList.add("is-visible");
    status.classList.toggle("is-error", type === "error");
    status.classList.toggle("is-success", type === "success");
}

/* =========================
   CONTACT CARD MOTION
   ========================= */

function initContactCardMotion() {
    const cards = document.querySelectorAll(".contact-info-card, .contact-checklist-grid article");

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