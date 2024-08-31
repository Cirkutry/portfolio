document.addEventListener('DOMContentLoaded', (event) => {
  // Initialize Lenis for smooth scrolling
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Typewriter effect for the hero section
  const typewriterText = document.getElementById('typewriter-text');
  const text = typewriterText.textContent;
  typewriterText.textContent = '';
  let i = 0;

  const typeWriter = () => {
    if (i < text.length) {
      typewriterText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(() => {
        typewriterText.textContent = '';
        i = 0;
        typeWriter();
      }, 3000);
    }
  };

  typeWriter();

  // Navbar visibility
  const navbar = document.getElementById('navbar');
  const mainLogo = document.querySelector('header .logo-container');
  const toTopBtn = document.getElementById('to-top-btn');

  window.addEventListener('scroll', () => {
    const mainLogoRect = mainLogo.getBoundingClientRect();
    if (mainLogoRect.bottom <= 0) {
      navbar.classList.remove('hidden');
    } else {
      navbar.classList.add('hidden');
    }
  });

  toTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Project cards animation
  const projectCards = document.querySelectorAll('.project-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  projectCards.forEach(card => {
    observer.observe(card);
  });
});