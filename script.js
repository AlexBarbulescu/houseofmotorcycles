document.addEventListener("DOMContentLoaded", function () {
  // State management
  const state = {
    isMobileMenuOpen: false,
    currentSlide: 0,
    language: "de",
    showScrollButton: false,
    activeSection: "hero",
    translations: {
      de: {
        home: "Home",
        motorcycles: "Motorräder",
        events: "Veranstaltungen",
        workshop: "Werkstatt",
        about: "Über uns",
        heroWelcome: "Dein Team von",
        heroIntro:
          "Welcome to the House of Motorcycles – wo dein Bike mehr ist als nur ein Fortbewegungsmittel.",
        heroBikes:
          "Ob Harley, Chopper oder Cruiser – wir helfen dir, genau das richtige Gefährt zu finden, sei es aus Europa oder direkt als US-Import.",
        heroPassion:
          "Bei uns bekommst du nicht nur Bikes, sondern echte Leidenschaft auf zwei Rädern.",
        heroCustom:
          "Vom klassischen Auspuff- oder Lenkerumbau bis hin zu komplett individuellen Custom-Projekten: Wir machen's möglich.",
        heroIdea: "Du hast die Idee – wir setzen sie um.",
        heroOutro:
          "House of Motorcycles steht für ehrliche Beratung, saubere Arbeit und Bikes, die Blicke auf sich ziehen. Schau vorbei, frag uns aus – wir sind ready, wenn du es bist.",
        findUs: "Standort",
        welcome: "Willkommen bei House of Motorcycles",
        salesRoom: "Zum Shop",
        featuredBikes: "Ausgewählte Bikes",
        onlinePurchase: "Motorrad Verkauf",
        delivery: "Motorrad Vermietung",
        tradeIn: "Fahrzeug Vermittlung",
        customization: "Custom Umbauten",
        purchaseDesc:
          "Schaue dich in unserem Verkaufsraum um und lass uns wissen ob dir ein Bike gefällt, oder aber welches Du suchst! ",
        deliveryDesc:
          "Du kannst ausgewählte Bikes bei uns auch mieten! Frag einfach ein Datum an und wir erstellen dir ein passendes Angebot. ",
        tradeInDesc:
          "Du hast keine Lust dein Motorrad selber zu inserieren? Kein problem! Wir übernehmen das für dich!",
        customDesc: "Schau dir unsere Galerie an, lass dich inspirieren und lass uns wissen ob auch Du einen Umbau haben möchtest. Unsere Werkstatt wartet auf dich!",
        contactUs: "Kontakt",
        quickLinks: "Schnellzugriff",
        rights: "© 2025 House of Motorcycles. Alle Rechte vorbehalten.",
      },
      en: {
        home: "Home",
        motorcycles: "Motorcycles",
        events: "Location",
        workshop: "Workshop",
        about: "About",
        heroWelcome: "Your Team from",
        heroIntro:
          "Welcome to the House of Motorcycles – where your bike is more than just a means of transportation.",
        heroBikes:
          "Whether Harley, Chopper or Cruiser – we help you find exactly the right vehicle, be it from Europe or directly as a US import.",
        heroPassion:
          "With us you get not just bikes, but real passion on two wheels.",
        heroCustom:
          "From classic exhaust or handlebar modifications to completely individual custom projects: We make it possible.",
        heroIdea: "You have the idea – we implement it.",
        heroOutro:
          "House of Motorcycles stands for honest advice, clean work and bikes that turn heads. Stop by, ask us questions – we're ready when you are.",
        findUs: "Location",
        welcome: "Welcome to House of Motorcycles",
        salesRoom: "To the shop",
        featuredBikes: "Featured Bikes",
        onlinePurchase: "Motorcycle Sales",
        delivery: "Motorcycle Rental",
        tradeIn: "Vehicle Brokerage",
        customization: "Custom Builds",
        purchaseDesc:
          "Take a look around our showroom and let us know if you see a bike you like — or tell us what you're looking for!",
        deliveryDesc:
          "You can also rent selected bikes from us! Just request a date and we’ll create a tailored offer for you.",
        tradeInDesc:
          "Don’t feel like listing your motorcycle yourself? No problem — we’ll take care of it for you!",
        customDesc: "Check out our gallery, get inspired, and let us know if you’d like a custom build too. Our workshop is ready for you!",
        contactUs: "Contact Us",
        quickLinks: "Quick Links",
        rights: "© 2025 House of Motorcycles. All rights reserved.",
      },
    },
  };

  // DOM Elements
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenuIcon = mobileMenuToggle.querySelector("i");
  const mainNav = document.querySelector(".main-nav");
  const scrollToTopBtn = document.querySelector(".scroll-to-top");
  const carouselTrack = document.querySelector(".carousel-track");
  const carouselSlides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dots = document.querySelectorAll(".dot");
  const langBtns = document.querySelectorAll(".lang-btn");
  const footerLangBtns = document.querySelectorAll(".footer-lang-btn");
  const navItems = document.querySelectorAll(".nav-item");
  const footerLinks = document.querySelectorAll(".footer-link");
  const website = document.querySelector(".website");

  // Functions
  function toggleMobileMenu() {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
    updateUI();
  }

  function closeMobileMenu() {
    state.isMobileMenuOpen = false;
    updateUI();
  }

  function updateUI() {
    // Update mobile menu
    if (state.isMobileMenuOpen) {
      mainNav.classList.add("open");
      mobileMenuIcon.className = "ti ti-x";
    } else {
      mainNav.classList.remove("open");
      mobileMenuIcon.className = "ti ti-menu-2";
    }

    // Update scroll to top button visibility
    scrollToTopBtn.style.display = state.showScrollButton ? "flex" : "none";

    // Update active section highlighting
    navItems.forEach((item) => {
      const href = item.getAttribute("href");
      if (href && href.substring(1) === state.activeSection) {
        item.style.color = "#FA6600";
      } else if (!item.classList.contains("nav-home")) {
        item.style.color = "#121212";
      }
    });

    // Update carousel
    carouselTrack.style.transform = `translateX(-${state.currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
      if (index === state.currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    // Update language buttons
    langBtns.forEach((btn) => {
      if (btn.classList.contains("lang-de")) {
        btn.style.background =
          state.language === "de" ? "#FA6600" : "transparent";
        btn.style.color = state.language === "de" ? "white" : "#000";
      } else if (btn.classList.contains("lang-en")) {
        btn.style.background =
          state.language === "en" ? "#FA6600" : "transparent";
        btn.style.color = state.language === "en" ? "white" : "#000";
      }
    });

    footerLangBtns.forEach((btn) => {
      if (btn.classList.contains("footer-lang-de")) {
        btn.style.background = state.language === "de" ? "#fff" : "transparent";
        btn.style.color = state.language === "de" ? "#000" : "#fff";
      } else if (btn.classList.contains("footer-lang-en")) {
        btn.style.background = state.language === "en" ? "#fff" : "transparent";
        btn.style.color = state.language === "en" ? "#000" : "#fff";
      }
    });

    // Update text content based on language
    updateLanguageContent();
  }

  function updateLanguageContent() {
    const currentLang = state.translations[state.language];

    // Update navigation items
    document.querySelector(".nav-home").textContent = currentLang.home;
    document.querySelector(".nav-about .nav-text").textContent =
      currentLang.about;
    document.querySelector(".nav-motorcycles .nav-text").textContent =
      currentLang.motorcycles;
    document.querySelectorAll(".nav-item")[3].textContent = currentLang.events;

    // Update hero section
    document.querySelector(".hero-welcome").textContent =
      currentLang.heroWelcome;

    // Update hero description paragraphs
    const heroDescriptionParagraphs = document
      .querySelector(".hero-description")
      .querySelectorAll("p");
    heroDescriptionParagraphs[0].textContent = currentLang.heroIntro;
    heroDescriptionParagraphs[1].textContent = currentLang.heroBikes;
    heroDescriptionParagraphs[2].textContent = currentLang.heroPassion;
    // Skip paragraph 3 (it's a <br>)
    // Skip paragraph 4 (it has fixed German text)
    heroDescriptionParagraphs[5].textContent = currentLang.heroIdea;
    // Skip paragraph 6 (it's a <br>)
    heroDescriptionParagraphs[7].textContent = currentLang.heroOutro;

    // Update CTA button
    document.querySelector(".cta-button").textContent = currentLang.salesRoom;

    // Update features section
    const serviceTitles = document.querySelectorAll(".service-title");
    serviceTitles[0].textContent = currentLang.onlinePurchase;
    serviceTitles[1].textContent = currentLang.delivery;
    serviceTitles[2].textContent = currentLang.tradeIn;
    serviceTitles[3].textContent = currentLang.customization;

    const serviceDescriptions = document.querySelectorAll(
      ".service-description",
    );
    serviceDescriptions[0].textContent = currentLang.purchaseDesc;
    serviceDescriptions[1].textContent = currentLang.deliveryDesc;
    serviceDescriptions[2].textContent = currentLang.tradeInDesc;
    serviceDescriptions[3].textContent = currentLang.customDesc;

    // Update gallery section
    document.querySelector(".gallery .section-title").textContent =
      currentLang.featuredBikes;

    // Update location section
    document.querySelector(".location .section-title").textContent =
      currentLang.findUs;

    // Update footer
    document.querySelector(".contact-info .footer-heading").textContent =
      currentLang.contactUs;
    document.querySelector(".quick-links .footer-heading").textContent =
      currentLang.quickLinks;
    document.querySelectorAll(".footer-link")[0].textContent =
      currentLang.about;
    document.querySelectorAll(".footer-link")[1].textContent =
      currentLang.motorcycles;
    document.querySelector(".copyright").textContent = currentLang.rights;
  }

  function nextSlide() {
    state.currentSlide = (state.currentSlide + 1) % carouselSlides.length;
    updateUI();
  }

  function prevSlide() {
    state.currentSlide =
      (state.currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    updateUI();
  }

  function goToSlide(index) {
    state.currentSlide = index;
    updateUI();
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
    closeMobileMenu();
  }

  function setLanguage(lang) {
    state.language = lang;
    updateUI();
  }

  function handleScroll() {
    // Show/hide scroll to top button
    state.showScrollButton = window.scrollY > 300;

    // Determine active section
    const sections = ["hero", "features", "gallery", "location"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          state.activeSection = section;
        }
      }
    });

    updateUI();
  }

  // Event Listeners
  mobileMenuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMobileMenu();
  });

  website.addEventListener("click", function () {
    closeMobileMenu();
  });

  mainNav.addEventListener("mouseleave", function () {
    closeMobileMenu();
  });

  scrollToTopBtn.addEventListener("click", scrollToTop);

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToSlide(index);
    });
  });

  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href) {
        scrollToSection(href.substring(1));
      }
    });
  });

  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href) {
        scrollToSection(href.substring(1));
      }
    });
  });

  langBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.classList.contains("lang-de")) {
        setLanguage("de");
      } else if (this.classList.contains("lang-en")) {
        setLanguage("en");
      }
    });
  });

  footerLangBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.classList.contains("footer-lang-de")) {
        setLanguage("de");
      } else if (this.classList.contains("footer-lang-en")) {
        setLanguage("en");
      }
    });
  });

  window.addEventListener("scroll", handleScroll);

  // Auto-advance carousel
  setInterval(nextSlide, 5000);

  // Initial UI update
  updateUI();
});
