(() => {
  const state = {
    isMobileMenuOpen: false,
    hoveredItem: null,
    currentSlide: 0,
    toggleMenu() {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
      update();
    },
    closeMenu() {
      state.isMobileMenuOpen = false;
      update();
    },
    setHoveredItem(item) {
      state.hoveredItem = item;
      update();
    },
    nextSlide() {
      state.currentSlide = (state.currentSlide + 1) % 4;
      update();
    },
    prevSlide() {
      state.currentSlide = (state.currentSlide - 1 + 4) % 4;
      update();
    },
    goToSlide(index) {
      state.currentSlide = index;
      update();
    },
  };

  let nodesToDestroy = [];
  let pendingUpdate = false;

  function destroyAnyNodes() {
    // destroy current view template refs before rendering again
    nodesToDestroy.forEach((el) => el.remove());
    nodesToDestroy = [];
  }

  // Function to update data bindings and loops
  function update() {
    if (pendingUpdate === true) {
      return;
    }
    pendingUpdate = true;

    // Website click handler
    document
      .getElementById("website")
      .addEventListener("click", onWebsiteClick);

    // Mobile menu button
    const menuButton = document.querySelector(".mobile-menu-button");
    menuButton.removeEventListener("click", onMenuButtonClick);
    menuButton.addEventListener("click", onMenuButtonClick);
    menuButton.setAttribute(
      "aria-expanded",
      state.isMobileMenuOpen ? "true" : "false",
    );

    // Menu icon
    const menuIcon = document.querySelector(".menu-icon");
    menuIcon.className = state.isMobileMenuOpen
      ? "ti ti-x menu-icon"
      : "ti ti-menu-2 menu-icon";

    // Main navigation
    const mainNav = document.querySelector(".main-nav");
    mainNav.removeEventListener("mouseleave", onMainNavMouseleave);
    mainNav.addEventListener("mouseleave", onMainNavMouseleave);

    // Apply mobile menu styles
    if (window.innerWidth <= 991) {
      Object.assign(mainNav.style, {
        position: "fixed",
        top: "0",
        right: state.isMobileMenuOpen ? "0" : "-100%",
        height: "100vh",
        width: "300px",
        backgroundColor: "white",
        flexDirection: "column",
        padding: "80px 20px",
        transition: "right 0.3s ease",
        boxShadow: "-5px 0 15px rgba(0,0,0,0.1)",
        zIndex: "1000",
      });
    } else {
      Object.assign(mainNav.style, {
        position: "",
        top: "",
        right: "",
        height: "",
        width: "",
        backgroundColor: "",
        flexDirection: "",
        padding: "",
        transition: "",
        boxShadow: "",
        zIndex: "",
      });
    }

    // Motorcycles dropdown
    const motorcyclesDropdown = document.querySelector(
      ".nav-dropdown:first-of-type .dropdown-trigger",
    );
    motorcyclesDropdown.removeEventListener(
      "mouseenter",
      onMotorcyclesMouseenter,
    );
    motorcyclesDropdown.addEventListener("mouseenter", onMotorcyclesMouseenter);
    motorcyclesDropdown.removeEventListener(
      "mouseleave",
      onMotorcyclesMouseleave,
    );
    motorcyclesDropdown.addEventListener("mouseleave", onMotorcyclesMouseleave);

    // Motorcycles dropdown icon
    const motorcyclesIcon = document.querySelector(
      ".nav-dropdown:first-of-type .dropdown-icon",
    );
    motorcyclesIcon.style.transform =
      state.hoveredItem === "motorcycles" ? "rotate(180deg)" : "rotate(0)";

    // About dropdown
    const aboutDropdown = document.querySelector(
      ".nav-dropdown:last-of-type .dropdown-trigger",
    );
    aboutDropdown.removeEventListener("mouseenter", onAboutMouseenter);
    aboutDropdown.addEventListener("mouseenter", onAboutMouseenter);
    aboutDropdown.removeEventListener("mouseleave", onAboutMouseleave);
    aboutDropdown.addEventListener("mouseleave", onAboutMouseleave);

    // About dropdown icon
    const aboutIcon = document.querySelector(
      ".nav-dropdown:last-of-type .dropdown-icon",
    );
    aboutIcon.style.transform =
      state.hoveredItem === "about" ? "rotate(180deg)" : "rotate(0)";

    // Gallery slider
    const gallerySlider = document.querySelector(".gallery-slider");
    gallerySlider.style.transform = `translateX(-${state.currentSlide * 100}%)`;

    // Gallery prev button
    const prevButton = document.querySelector(".gallery-prev");
    prevButton.removeEventListener("click", onPrevButtonClick);
    prevButton.addEventListener("click", onPrevButtonClick);

    // Gallery next button
    const nextButton = document.querySelector(".gallery-next");
    nextButton.removeEventListener("click", onNextButtonClick);
    nextButton.addEventListener("click", onNextButtonClick);

    // Gallery dots
    const dotsContainer = document.querySelector(".gallery-dots");
    dotsContainer.innerHTML = "";

    for (let i = 0; i < 4; i++) {
      const dot = document.createElement("button");
      dot.className = "dot";
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
      dot.style.background =
        state.currentSlide === i ? "white" : "rgba(255, 255, 255, 0.5)";
      dot.addEventListener("click", () => {
        state.goToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }

    // Map iframe
    const mapIframe = document.querySelector(".map-container iframe");
    mapIframe.style.border = "0";

    destroyAnyNodes();
    pendingUpdate = false;
  }

  // Event handler for website click
  function onWebsiteClick(event) {
    state.closeMenu();
  }

  // Event handler for menu button click
  function onMenuButtonClick(event) {
    event.stopPropagation();
    state.toggleMenu();
  }

  // Event handler for main nav mouseleave
  function onMainNavMouseleave(event) {
    state.closeMenu();
  }

  // Event handler for motorcycles dropdown mouseenter
  function onMotorcyclesMouseenter(event) {
    state.setHoveredItem("motorcycles");
  }

  // Event handler for motorcycles dropdown mouseleave
  function onMotorcyclesMouseleave(event) {
    state.setHoveredItem(null);
  }

  // Event handler for about dropdown mouseenter
  function onAboutMouseenter(event) {
    state.setHoveredItem("about");
  }

  // Event handler for about dropdown mouseleave
  function onAboutMouseleave(event) {
    state.setHoveredItem(null);
  }

  // Event handler for prev button click
  function onPrevButtonClick(event) {
    state.prevSlide();
  }

  // Event handler for next button click
  function onNextButtonClick(event) {
    state.nextSlide();
  }

  // Initialize the page
  document.addEventListener("DOMContentLoaded", () => {
    update();

    // Auto-advance gallery slides
    const interval = setInterval(() => {
      state.nextSlide();
    }, 5000);

    // Cleanup on page unload
    window.addEventListener("beforeunload", () => {
      clearInterval(interval);
    });
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    update();
  });
})();
