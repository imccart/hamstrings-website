document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }
});
