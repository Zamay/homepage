(function () {
  "use strict";

// COLOR MODE
  function toggleColorMode() {
    const colorModeIcon = document.querySelector('#theme-toggle-dark-icon');
    const isDarkMode = document.body.classList.toggle('dark-mode');

    colorModeIcon.classList.toggle('fa-moon', !isDarkMode);
    colorModeIcon.classList.toggle('fa-sun', isDarkMode);
    colorModeIcon.classList.toggle('animate-spin', isDarkMode);
  }

  function applyColorModeBasedOnTime() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const isNightTime = currentHour >= 20 || currentHour < 6;

    if (isNightTime) {
      toggleColorMode();
    }
  }

  const colorMode = document.querySelector('.color-mode');
  colorMode.addEventListener('click', toggleColorMode);

  applyColorModeBasedOnTime();

  // TOGGLE NAV ( переписана bootstrap логіка, але без анімації )
  function toggleNavbar() {
    const navbar = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
      navbarToggler.classList.add('collapsed');
      navbarToggler.setAttribute('aria-expanded', 'false');
    } else {
      navbar.classList.add('show');
      navbarToggler.classList.remove('collapsed');
      navbarToggler.setAttribute('aria-expanded', 'true');
    }
  }

  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', toggleNavbar);

  // SCROLL
  let prevScrollPos = window.pageYOffset;
  const header = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      header.style.transform = 'translateY(0)';
      header.style.transition = 'transform 0.3s ease-in-out';
    } else {
      header.style.transform = `translateY(-${header.offsetHeight}px)`;
      header.style.transition = 'transform 0.3s ease-in-out';
      document.getElementById('navbarNav').classList.remove('show');
      document.querySelector('.navbar-toggler').classList.add('collapsed');
      document.querySelector('.navbar-toggler').setAttribute('aria-expanded', 'false');
    }

    prevScrollPos = currentScrollPos;
  });

})()

