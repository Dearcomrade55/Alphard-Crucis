// Initialize AOS for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Animation happens only once
  });

  // Auto-Typing Effect for About Us
  const typingElement = document.querySelector('.auto-typing');
  const textArray = typingElement.getAttribute('data-text').split('. ');
  let currentIndex = 0;

  function typeText() {
    if (currentIndex < textArray.length) {
      typingElement.textContent = textArray[currentIndex] + '.';
      currentIndex++;
      setTimeout(typeText, 2000);
    }
  }

  typeText();
});

// Contact Form Submission (Basic Example)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  contactForm.reset();
});
// AOS Animation Initialization
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
});
// AOS Animation Initialization
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
});
// AOS Initialization for Scroll Animation
AOS.init({
  duration: 1000, // Duration of the animation
  easing: 'ease-in-out', // Easing function for smooth transition
  once: true, // Trigger animation only once when the element is in the viewport
  offset: 100, // Set an offset to trigger the animation a little earlier or later
});
