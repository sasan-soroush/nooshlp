(function () {
  'use strict';

  // ===== NAV SCROLL EFFECT =====
  const nav = document.getElementById('nav');

  function handleNavScroll() {
    if (window.scrollY > 20) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ===== MOBILE NAV TOGGLE =====
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // ===== SCROLL ANIMATIONS =====
  var animatedElements = document.querySelectorAll('[data-animate]');

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  animatedElements.forEach(function (el) {
    observer.observe(el);
  });

  // ===== STAT COUNTER ANIMATION =====
  var statNumbers = document.querySelectorAll('.stat__number[data-target]');
  var statAnimated = false;

  var statsSection = document.getElementById('stats');
  if (statsSection) {
    var statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !statAnimated) {
            statAnimated = true;
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    statsObserver.observe(statsSection);
  }

  function animateCounters() {
    statNumbers.forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-target'));
      var suffix = el.getAttribute('data-suffix') || '';
      var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      var duration = 2000;
      var start = performance.now();

      function update(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = eased * target;

        if (decimals > 0) {
          el.textContent = current.toFixed(decimals) + suffix;
        } else {
          el.textContent = Math.floor(current) + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  }

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 72;
        var top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });
})();
