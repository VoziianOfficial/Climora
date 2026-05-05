"use strict";


const companyName = "Climora";
const previousCompanyName = "Climora";

window.SITE_CONFIG = {
    companyName,
    companyId: "CLM-HVAC-8392",
    previousCompanyName,

    brand: {
        shortName: companyName,
        logoSubtitle: "HVAC matching",
        tagline: "Compare local HVAC provider options with a calmer request flow.",
        shortTagline: "HVAC provider matching",
        logoLabel: `${companyName} HVAC provider matching platform`,
        logoMarkLabel: "Minimal ventilation grille with airflow symbol"
    },

    phone: "+1 888 624 3178",
    phoneHref: "+18886243178",
    phoneLabel: "Compare HVAC Options",

    email: "hello@climoramatch.com",

    address: {
        line1: "515 Congress Avenue",
        city: "Austin",
        state: "TX",
        zip: "78701",
        country: "USA",
        full: "515 Congress Avenue, Austin, TX 78701, USA"
    },

    serviceArea: "Independent HVAC provider matching across the United States",

    footerText:
        `${companyName} is an independent HVAC provider matching platform that helps homeowners compare local provider options for heating, cooling, system replacement, repair requests, and indoor comfort projects.`,

    legalNotice:
        `${companyName} does not perform HVAC installation, repair, replacement, maintenance, or heating and cooling services directly. Provider availability, response times, pricing, qualifications, licenses, and insurance may vary by location and by independent provider.`,

    disclaimer:
        "Disclaimer: This site is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.",

    navLinks: [
        {
            label: "Home",
            href: "index.html"
        },
        {
            label: "Services",
            href: "services.html"
        },
        {
            label: "About",
            href: "about.html"
        },
        {
            label: "Contact",
            href: "contact.html"
        }
    ],

    legalLinks: [
        {
            label: "Privacy Policy",
            href: "privacy-policy.html"
        },
        {
            label: "Cookie Policy",
            href: "cookie-policy.html"
        },
        {
            label: "Terms of Service",
            href: "terms-of-service.html"
        }
    ],

    serviceLinks: [
        {
            label: "HVAC Installation",
            href: "hvac-installation.html"
        },
        {
            label: "HVAC Repair",
            href: "hvac-repair.html"
        },
        {
            label: "AC Services",
            href: "ac-services.html"
        },
        {
            label: "Heating Services",
            href: "heating-services.html"
        }
    ],

    pageMeta: {
        "index.html": {
            title: `${companyName} | Compare Local HVAC Provider Options`,
            description:
                `${companyName} helps homeowners compare local HVAC provider options for heating, cooling, repair, installation, and system comfort requests.`
        },

        "services.html": {
            title: `HVAC Service Categories | ${companyName}`,
            description:
                `Explore HVAC service categories and compare independent local provider options through ${companyName}.`
        },

        "about.html": {
            title: `About ${companyName} | Independent HVAC Matching Platform`,
            description:
                `Learn how ${companyName} helps homeowners connect with independent HVAC providers while keeping the request process clear and aggregator-safe.`
        },

        "contact.html": {
            title: `Contact ${companyName} | HVAC Provider Matching Requests`,
            description:
                `Contact ${companyName} to begin an HVAC provider matching request for heating, cooling, installation, or repair-related projects.`
        },

        "hvac-installation.html": {
            title: `Compare HVAC Installation Provider Options | ${companyName}`,
            description:
                `Compare local HVAC installation provider options for new systems, replacement planning, and home comfort upgrades.`
        },

        "hvac-repair.html": {
            title: `Compare HVAC Repair Provider Options | ${companyName}`,
            description:
                `Request matching with local HVAC repair providers for heating, cooling, airflow, thermostat, or comfort concerns.`
        },

        "ac-services.html": {
            title: `Compare AC Service Provider Options | ${companyName}`,
            description:
                `Compare local AC service provider options for cooling issues, seasonal service, system checks, and comfort requests.`
        },

        "heating-services.html": {
            title: `Compare Heating Service Provider Options | ${companyName}`,
            description:
                `Explore local heating provider options for furnace, heat pump, airflow, and seasonal heating requests.`
        },

        "privacy-policy.html": {
            title: `Privacy Policy | ${companyName}`,
            description:
                `Read the ${companyName} privacy policy for information about data collection, contact forms, and homeowner request handling.`
        },

        "cookie-policy.html": {
            title: `Cookie Policy | ${companyName}`,
            description:
                `Read the ${companyName} cookie policy for information about cookies, analytics, and site preferences.`
        },

        "terms-of-service.html": {
            title: `Terms of Service | ${companyName}`,
            description:
                `Read the ${companyName} terms of service for platform use, provider matching, and homeowner responsibilities.`
        }
    },

    home: {
        hero: {
            eyebrow: "Independent HVAC matching platform",
            title: "Compare local HVAC provider options with a cleaner, calmer request flow.",
            text:
                `${companyName} helps homeowners request matching with independent heating and cooling providers based on project type, location, and availability.`,
            primaryCta: "Start Matching Request",
            primaryHref: "contact.html",
            secondaryCta: "View HVAC Services",
            secondaryHref: "services.html"
        },

        highlights: [
            {
                icon: "wind",
                label: "Comfort request",
                title: "Describe the HVAC concern",
                text: "Share the type of heating, cooling, airflow, or system request."
            },
            {
                icon: "map-pin",
                label: "Local availability",
                title: "Match by area",
                text: "Provider availability may vary by ZIP code, season, and service category."
            },
            {
                icon: "clipboard-check",
                label: "Compare options",
                title: "Review provider fit",
                text: "Homeowners can compare communication, timing, scope, and quote details."
            }
        ],

        process: [
            {
                step: "01",
                title: "Choose the request type",
                text: "Select installation, repair, AC service, or heating service."
            },
            {
                step: "02",
                title: "Share basic project details",
                text: "Add location, timing, property type, and visible system symptoms."
            },
            {
                step: "03",
                title: "Compare provider options",
                text: "Review independent provider responses before choosing who to contact."
            }
        ]
    },

    about: {
        eyebrow: "About the platform",
        title: `${companyName} was created to make HVAC provider comparison feel less scattered.`,
        intro:
            `Heating and cooling projects can be stressful because homeowners often need to understand timing, availability, system type, and provider fit at the same time. ${companyName} gives homeowners a structured way to begin the request process without presenting itself as a direct HVAC contractor.`,
        modelTitle: "How the aggregator model works",
        modelText:
            `${companyName} helps organize homeowner requests and connect them with independent local HVAC providers. The platform does not perform the work, does not dispatch its own technicians, and does not guarantee contractor results. Homeowners should verify licenses, insurance, qualifications, scope, pricing, and written agreements before hiring any provider.`
    },

    servicesIntro: {
        eyebrow: "HVAC service categories",
        title: "Start with the HVAC category that best matches your home comfort request.",
        text:
            "Each category is designed to help homeowners describe their needs clearly before comparing independent local provider options."
    },

    services: [
        {
            id: "hvac-installation",
            title: "HVAC Installation",
            shortTitle: "Installation",
            href: "hvac-installation.html",
            icon: "panel-top",
            image: "./assets/images/services/hvac-installation.jpg",
            overlayLabel: "System planning",
            summary:
                "Compare provider options for new HVAC systems, replacement planning, system sizing conversations, and indoor comfort upgrades.",
            hero: {
                eyebrow: "HVAC installation matching",
                title: "Compare local provider options for HVAC installation requests.",
                text:
                    "A new HVAC system can involve sizing, property layout, energy needs, equipment type, and installation timing. Climora helps homeowners begin the comparison process with independent local providers."
            },
            sections: {
                overviewTitle: "Installation requests usually begin with system fit.",
                overviewText:
                    "Homeowners may need to compare providers based on system type, home size, current ductwork, energy goals, and quote clarity. Climora helps structure the request so providers can better understand the project before follow-up.",
                evaluationTitle: "What homeowners may compare",
                evaluationItems: [
                    "System type and comfort goals",
                    "Provider availability in the homeowner’s area",
                    "Written quote detail and project scope",
                    "License, insurance, and qualification verification",
                    "Timeline expectations and communication quality"
                ],
                factorsTitle: "Factors that can affect provider recommendations",
                factors: [
                    "Home square footage and layout",
                    "Current equipment age and condition",
                    "Ductwork condition and airflow needs",
                    "Energy efficiency preferences",
                    "Local code or permit requirements"
                ]
            },
            faq: [
                {
                    question: "Does Climora install HVAC systems?",
                    answer:
                        "No. Climora is an independent matching platform and does not perform HVAC installation directly."
                },
                {
                    question: "Can I compare more than one HVAC installation provider?",
                    answer:
                        "The platform is designed to help homeowners request matching and compare available independent provider options."
                },
                {
                    question: "What should I ask before choosing an installer?",
                    answer:
                        "Ask about licensing, insurance, equipment options, written scope, warranty details, timing, and permit requirements."
                },
                {
                    question: "What affects HVAC installation pricing?",
                    answer:
                        "Pricing can depend on system type, home size, ductwork condition, equipment efficiency, labor scope, and local requirements."
                }
            ]
        },

        {
            id: "hvac-repair",
            title: "HVAC Repair",
            shortTitle: "Repair",
            href: "hvac-repair.html",
            icon: "wrench",
            image: "./assets/images/services/hvac-repair.jpg",
            overlayLabel: "Comfort issue",
            summary:
                "Request matching for HVAC repair-related concerns such as uneven temperatures, airflow issues, unusual sounds, or system interruptions.",
            hero: {
                eyebrow: "HVAC repair matching",
                title: "Compare local provider options for HVAC repair concerns.",
                text:
                    "When heating or cooling feels unreliable, clear request details can help homeowners connect with providers suited to the situation."
            },
            sections: {
                overviewTitle: "Repair requests work best when symptoms are clear.",
                overviewText:
                    "Homeowners may describe the system type, issue timing, sounds, thermostat behavior, airflow concerns, or recent changes. Climora helps organize those details for a smoother provider matching request.",
                evaluationTitle: "What homeowners may compare",
                evaluationItems: [
                    "Response availability by location",
                    "Diagnostic approach and communication",
                    "Service category fit",
                    "Quote transparency",
                    "License and insurance verification"
                ],
                factorsTitle: "Details that may influence repair provider fit",
                factors: [
                    "System age",
                    "Heating or cooling symptoms",
                    "Thermostat behavior",
                    "Airflow changes",
                    "Previous service history"
                ]
            },
            faq: [
                {
                    question: "Does Climora repair HVAC systems?",
                    answer:
                        "No. Climora does not perform HVAC repairs directly. It helps homeowners connect with independent local provider options."
                },
                {
                    question: "What repair details should I include?",
                    answer:
                        "Include the system type, symptoms, when the issue started, thermostat behavior, and any recent maintenance or repairs."
                },
                {
                    question: "Are repair quotes usually free?",
                    answer:
                        "Quote and diagnostic policies vary by independent provider. Homeowners should confirm fees before scheduling."
                },
                {
                    question: "How do I know if a provider serves my area?",
                    answer:
                        "Provider availability may vary by ZIP code and schedule. Climora helps begin the request based on location and project type."
                }
            ]
        },

        {
            id: "ac-services",
            title: "AC Services",
            shortTitle: "AC Services",
            href: "ac-services.html",
            icon: "snowflake",
            image: "./assets/images/services/ac-services.jpg",
            overlayLabel: "Cooling comfort",
            summary:
                "Compare provider options for air conditioning service requests, cooling performance concerns, seasonal checks, or AC replacement conversations.",
            hero: {
                eyebrow: "AC provider matching",
                title: "Compare local AC service provider options for cooling requests.",
                text:
                    "Cooling issues can depend on equipment, airflow, thermostat settings, insulation, and seasonal demand. Climora helps homeowners start with a clear AC service request."
            },
            sections: {
                overviewTitle: "AC service requests should focus on comfort patterns.",
                overviewText:
                    "Instead of guessing the cause, homeowners can describe what they notice: warm air, short cycling, weak airflow, unusual sounds, or rooms that stay uncomfortable.",
                evaluationTitle: "What homeowners may compare",
                evaluationItems: [
                    "Cooling service availability",
                    "Provider communication",
                    "Diagnostic process",
                    "Maintenance or repair quote details",
                    "Credentials and insurance verification"
                ],
                factorsTitle: "AC project factors providers may consider",
                factors: [
                    "AC unit age",
                    "Cooling performance",
                    "Filter and airflow conditions",
                    "Thermostat behavior",
                    "Seasonal temperature demand"
                ]
            },
            faq: [
                {
                    question: "Does Climora provide AC service directly?",
                    answer:
                        "No. Climora is a matching platform and does not perform AC service directly."
                },
                {
                    question: "Can I use Climora for seasonal AC service?",
                    answer:
                        "Yes, homeowners can submit AC-related requests and compare available independent provider options."
                },
                {
                    question: "What affects AC service pricing?",
                    answer:
                        "Pricing may depend on the issue, system condition, parts, diagnostic policies, labor scope, and provider pricing."
                },
                {
                    question: "Should I verify provider credentials?",
                    answer:
                        "Yes. Homeowners should verify licenses, insurance, qualifications, and written terms before hiring any provider."
                }
            ]
        },

        {
            id: "heating-services",
            title: "Heating Services",
            shortTitle: "Heating",
            href: "heating-services.html",
            icon: "flame",
            image: "./assets/images/services/heating-services.jpg",
            overlayLabel: "Warmth planning",
            summary:
                "Compare local heating provider options for furnace, heat pump, seasonal service, heating concerns, or replacement planning.",
            hero: {
                eyebrow: "Heating provider matching",
                title: "Compare local heating service provider options.",
                text:
                    "Heating requests may involve comfort, safety, equipment age, airflow, fuel type, or seasonal timing. Climora helps homeowners organize the request before connecting with independent providers."
            },
            sections: {
                overviewTitle: "Heating service requests often need context.",
                overviewText:
                    "Homeowners can share whether the issue involves no heat, uneven warmth, unusual smells, short cycling, thermostat concerns, or replacement planning.",
                evaluationTitle: "What homeowners may compare",
                evaluationItems: [
                    "Heating system experience by provider",
                    "Availability during colder seasons",
                    "Written estimate clarity",
                    "Communication before scheduling",
                    "License and insurance verification"
                ],
                factorsTitle: "Heating request factors providers may review",
                factors: [
                    "System type",
                    "Fuel or energy source",
                    "Equipment age",
                    "Home insulation and airflow",
                    "Safety or performance concerns"
                ]
            },
            faq: [
                {
                    question: "Does Climora perform heating service?",
                    answer:
                        "No. Climora does not perform heating service directly. It helps homeowners compare independent local provider options."
                },
                {
                    question: "What heating details should I include?",
                    answer:
                        "Include the system type, symptoms, when the issue started, thermostat behavior, and any safety concerns."
                },
                {
                    question: "Can I compare heating replacement options?",
                    answer:
                        "Yes. Homeowners can use Climora to begin a matching request for heating replacement conversations."
                },
                {
                    question: "Do heating providers serve every area?",
                    answer:
                        "No. Provider availability may vary by ZIP code, schedule, service type, and season."
                }
            ]
        }
    ],

    contact: {
        eyebrow: "Start a matching request",
        title: "Tell us what kind of HVAC provider option you want to compare.",
        text:
            "Use the form to share basic project details. Climora does not perform HVAC services directly and does not guarantee provider availability.",
        mapTitle: "USA-based request coverage",
        mapText:
            "Climora supports homeowner HVAC matching requests across the United States. Availability may vary by service category and location.",
        formLabels: {
            name: "Full name",
            email: "Email address",
            phone: "Phone number",
            zip: "ZIP code",
            service: "Service type",
            message: "Project details",
            consent:
                "I understand Climora is a matching platform and does not perform HVAC services directly."
        },
        serviceOptions: [
            "HVAC Installation",
            "HVAC Repair",
            "AC Services",
            "Heating Services",
            "Not sure yet"
        ]
    },

    faq: [
        {
            question: "How do I compare local HVAC providers?",
            answer:
                "Start by describing the service category, location, timing, and system concern. Then compare provider communication, quote details, availability, credentials, and written terms."
        },
        {
            question: "Does Climora provide HVAC services directly?",
            answer:
                "No. Climora is an independent matching platform and does not install, repair, replace, or maintain HVAC systems directly."
        },
        {
            question: "Are quotes from providers usually free?",
            answer:
                "Quote and diagnostic policies vary by independent provider. Homeowners should confirm pricing, fees, and terms before scheduling."
        },
        {
            question: "What affects HVAC project pricing?",
            answer:
                "Pricing may depend on system type, equipment condition, home size, labor scope, parts, availability, local requirements, and provider pricing."
        },
        {
            question: "How do I know if a provider serves my area?",
            answer:
                "Provider availability may vary by ZIP code, service type, season, and schedule. Climora helps begin matching based on location and request category."
        }
    ],

    cookieBanner: {
        title: "Privacy preferences",
        text:
            `${companyName} uses cookies and similar technologies to support site functionality, understand basic usage, and improve the request experience. Please review the policy links before choosing an option.`,
        acceptLabel: "Accept",
        declineLabel: "Decline",
        storageKey: "climora_policy_choice"
    },

    socialProofSafe: [
        "Structured request flow",
        "Independent provider options",
        "USA service area",
        "License verification encouraged"
    ]
};