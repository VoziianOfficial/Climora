"use strict";

/* ==========================================================
   CLIMORA — MAIN GLOBAL SCRIPT
   File: /js/main.js

   Handles:
   - config injection
   - title/meta from config
   - sticky header
   - mobile menu
   - FAQ accordion
   - policy banner
   - Lucide icons
   - AOS animations
   - global mini request forms
   - FAQ JSON-LD schema
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const config = window.SITE_CONFIG;

    if (!config) {
        console.warn("SITE_CONFIG is missing. Check /js/config.js connection.");
        return;
    }

    applyPageMeta(config);
    injectConfigValues(config);
    setActiveNavigation();
    initStickyHeader();
    initMobileMenu();
    initFaqAccordion();
    initPolicyBanner(config);
    initMiniRequestForms();
    injectGlobalFaqSchema(config);
    initLibraries();
});

/* =========================
   CURRENT PAGE
   ========================= */

function getCurrentPageName() {
    const path = window.location.pathname;
    const fileName = path.substring(path.lastIndexOf("/") + 1);

    return fileName || "index.html";
}

/* =========================
   PAGE META FROM CONFIG
   ========================= */

function applyPageMeta(config) {
    const currentPage = getCurrentPageName();
    const meta = config.pageMeta?.[currentPage];

    if (!meta) {
        console.warn(`No page meta found for: ${currentPage}`);
        return;
    }

    if (meta.title) {
        document.title = meta.title;
    }

    if (meta.description) {
        let descriptionTag = document.querySelector('meta[name="description"]');

        if (!descriptionTag) {
            descriptionTag = document.createElement("meta");
            descriptionTag.setAttribute("name", "description");
            document.head.appendChild(descriptionTag);
        }

        descriptionTag.setAttribute("content", meta.description);
    }
}

/* =========================
   CONFIG VALUE INJECTION
   ========================= */

function injectConfigValues(config) {
    const {
        companyName,
        companyId,
        phone,
        phoneHref,
        phoneLabel,
        email,
        address,
        serviceArea,
        footerText,
        legalNotice,
        disclaimer,
        brand
    } = config;

    setText("[data-company-name]", companyName);
    setText("[data-logo-subtitle]", brand?.logoSubtitle);
    setText("[data-company-id]", companyId);
    setText("[data-address]", address?.full);
    setText("[data-service-area]", serviceArea);
    setText("[data-footer-text]", footerText);
    setText("[data-legal-notice]", legalNotice);
    setText("[data-disclaimer]", disclaimer);
    setText("[data-phone]", phone);
    setText("[data-phone-label]", phoneLabel);
    setText("[data-email]", email);

    setHref("[data-phone-href]", `tel:${phoneHref}`);
    setHref("[data-email-href]", `mailto:${email}`);

    document.querySelectorAll("[data-logo-label]").forEach((logo) => {
        logo.setAttribute("aria-label", brand?.logoLabel || `${companyName} home`);
    });

    replaceCompanyTokens(companyName);
}

function setText(selector, value) {
    if (!value) return;

    document.querySelectorAll(selector).forEach((element) => {
        element.textContent = value;
    });
}

function setHref(selector, value) {
    if (!value) return;

    document.querySelectorAll(selector).forEach((element) => {
        element.setAttribute("href", value);
    });
}

function replaceCompanyTokens(companyName) {
    const tokenElements = document.querySelectorAll("[data-company-token]");

    tokenElements.forEach((element) => {
        element.textContent = element.textContent.replaceAll("{{companyName}}", companyName);
    });
}

/* =========================
   ACTIVE NAVIGATION
   ========================= */

function setActiveNavigation() {
    const currentPage = getCurrentPageName();
    const links = document.querySelectorAll(
        ".desktop-nav a, .mobile-nav a, .footer-column a, .mobile-service-links a"
    );

    links.forEach((link) => {
        const href = link.getAttribute("href");

        if (!href) return;

        if (href === currentPage) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

/* =========================
   STICKY HEADER STATE
   ========================= */

function initStickyHeader() {
    const header = document.querySelector("[data-site-header]");

    if (!header) return;

    const updateHeader = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });
}

/* =========================
   MOBILE MENU
   ========================= */

function initMobileMenu() {
    const menu = document.querySelector("[data-mobile-menu]");
    const toggle = document.querySelector("[data-menu-toggle]");
    const closeButtons = document.querySelectorAll("[data-menu-close]");
    const menuLinks = document.querySelectorAll(".mobile-menu a");

    if (!menu || !toggle) return;

    const openMenu = () => {
        menu.classList.add("is-open");
        menu.setAttribute("aria-hidden", "false");
        toggle.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");

        const firstFocusable = menu.querySelector("a, button");

        if (firstFocusable) {
            setTimeout(() => firstFocusable.focus(), 80);
        }
    };

    const closeMenu = () => {
        menu.classList.remove("is-open");
        menu.setAttribute("aria-hidden", "true");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    };

    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.contains("is-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", closeMenu);
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menu.classList.contains("is-open")) {
            closeMenu();
            toggle.focus();
        }
    });

    trapMobileMenuFocus(menu, toggle);
}

function trapMobileMenuFocus(menu, toggle) {
    document.addEventListener("keydown", (event) => {
        if (event.key !== "Tab" || !menu.classList.contains("is-open")) return;

        const focusableElements = menu.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );

        if (!focusableElements.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        }

        if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }

        if (!menu.contains(document.activeElement)) {
            toggle.focus();
        }
    });
}

/* =========================
   FAQ ACCORDION
   ========================= */

function initFaqAccordion() {
    const faqItems = document.querySelectorAll("[data-faq-item]");

    if (!faqItems.length) return;

    faqItems.forEach((item) => {
        const button = item.querySelector(".faq-question");

        if (!button) return;

        button.addEventListener("click", () => {
            const isOpen = item.classList.contains("is-open");

            faqItems.forEach((otherItem) => {
                const otherButton = otherItem.querySelector(".faq-question");

                otherItem.classList.remove("is-open");

                if (otherButton) {
                    otherButton.setAttribute("aria-expanded", "false");
                }
            });

            if (!isOpen) {
                item.classList.add("is-open");
                button.setAttribute("aria-expanded", "true");
            }
        });
    });
}

/* =========================
   POLICY / COOKIE BANNER
   ========================= */

function initPolicyBanner(config) {
    const banner = document.querySelector("[data-policy-banner]");
    const acceptButton = document.querySelector("[data-policy-accept]");
    const declineButton = document.querySelector("[data-policy-decline]");

    if (!banner || !acceptButton || !declineButton) return;

    const storageKey = config.cookieBanner?.storageKey || "site_policy_choice";
    const savedChoice = localStorage.getItem(storageKey);

    if (!savedChoice) {
        banner.classList.add("is-visible");
    }

    acceptButton.addEventListener("click", () => {
        localStorage.setItem(storageKey, "accepted");
        banner.classList.remove("is-visible");
    });

    declineButton.addEventListener("click", () => {
        localStorage.setItem(storageKey, "declined");
        banner.classList.remove("is-visible");
    });
}

/* =========================
   MINI REQUEST FORM
   ========================= */

function initMiniRequestForms() {
    const forms = document.querySelectorAll("[data-mini-form]");

    if (!forms.length) return;

    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const zip = String(formData.get("zip") || "").trim();
            const service = String(formData.get("service") || "").trim();
            const isChecked = form.querySelector('input[type="checkbox"]')?.checked;

            const zipField = form.querySelector('input[name="zip"]');
            const serviceField = form.querySelector('select[name="service"]');
            const checkField = form.querySelector(".form-check-custom");

            clearFormError(zipField);
            clearFormError(serviceField);
            clearFormError(checkField);

            let hasError = false;

            if (!zip || zip.length < 5) {
                setFormError(zipField);
                hasError = true;
            }

            if (!service) {
                setFormError(serviceField);
                hasError = true;
            }

            if (!isChecked) {
                setFormError(checkField);
                hasError = true;
            }

            if (hasError) return;

            const params = new URLSearchParams();

            params.set("zip", zip);
            params.set("service", service);

            window.location.href = `contact.html?${params.toString()}`;
        });
    });
}

function setFormError(element) {
    if (!element) return;

    element.classList.add("is-invalid");
    element.setAttribute("aria-invalid", "true");
}

function clearFormError(element) {
    if (!element) return;

    element.classList.remove("is-invalid");
    element.removeAttribute("aria-invalid");
}

/* =========================
   FAQ JSON-LD SCHEMA
   ========================= */

function injectGlobalFaqSchema(config) {
    const page = document.body.dataset.page;

    if (page !== "home") return;

    const faq = config.faq;

    if (!Array.isArray(faq) || !faq.length) return;

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

    const existingSchema = document.querySelector("#faq-schema");

    if (existingSchema) {
        existingSchema.remove();
    }

    const script = document.createElement("script");

    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(schema);

    document.head.appendChild(script);
}

/* =========================
   LIBRARIES
   ========================= */

function initLibraries() {
    if (window.lucide) {
        window.lucide.createIcons();
    }

    if (window.AOS) {
        window.AOS.init({
            duration: 720,
            easing: "ease-out-cubic",
            once: true,
            offset: 70
        });
    }
}