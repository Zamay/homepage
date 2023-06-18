(function () {
  "use strict";

// COLOR MODE
  const colorMode = document.querySelector('.color-mode');
  colorMode.addEventListener('click', () => {
    const colorModeIcon = document.querySelector('#theme-toggle-dark-icon');
    colorModeIcon.classList.toggle('active');
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      colorModeIcon.classList.remove('fa-moon');
      colorModeIcon.classList.add('fa-sun');
      colorModeIcon.classList.add('animate-spin');
    } else {
      colorModeIcon.classList.remove('fa-sun');
      colorModeIcon.classList.add('fa-moon');
      colorModeIcon.classList.remove('animate-spin')
    }
  });

  // TOGGLE NAV ( переписана bootstrap логіка, але без анімації )
  function toggleNavbar() {
    const navbar = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
      navbarToggler.classList.add('collapsed');
      navbar.setAttribute('aria-expanded', 'false');
    } else {
      navbar.classList.add('show');
      navbarToggler.classList.remove('collapsed');
      navbar.setAttribute('aria-expanded', 'true');
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
    }

    prevScrollPos = currentScrollPos;
  })

})()

