document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS for scroll animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Theme Toggle functionality
    const toggleIcons = document.querySelectorAll(".theme-toggle i");
    const body = document.body;

    toggleIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            body.classList.toggle("light-mode");
            body.classList.toggle("dark-mode");
        });
    });

    // Auto-Typing Effect functionality
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        if (toRotate) new Typewriter(elements[i], JSON.parse(toRotate), 200);
    }

    // Typewriter class definition
    function Typewriter(el, toRotate, period) {
        this.toRotate = toRotate; // Array of strings to type
        this.el = el; // The element to display the typing effect
        this.loopNum = 0; // Loop counter
        this.period = period; // Typing speed
        this.txt = ''; // Current text
        this.isDeleting = false; // Flag to indicate if text is being deleted

        // Use an arrow function to bind `this` automatically
        this.tick = () => {
            const i = this.loopNum % this.toRotate.length; // Get the index of the current string to type
            const fullTxt = this.toRotate[i]; // Full text to type

            this.txt = this.isDeleting
                ? fullTxt.substring(0, this.txt.length - 1) // Delete one character at a time
                : fullTxt.substring(0, this.txt.length + 1); // Add one character at a time

            this.el.innerHTML = `<span class="wrap">${this.txt}</span>`; // Update the element's inner HTML with the current text

            let delta = 200 - Math.random() * 100; // Typing speed (randomized)

            if (this.isDeleting) delta /= 2; // Slow down the deletion speed

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period; // Pause after typing the full text
                this.isDeleting = true; // Start deleting text
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false; // Stop deleting, start typing the next string
                this.loopNum++; // Increment the loop counter
                delta = 500; // Wait before typing the next string
            }

            // Call the tick method again after a delay
            setTimeout(this.tick, delta);
        };

        this.tick(); // Start typing animation
    }
});
// Typing Animation for About Us Section
const typewriteAbout = document.querySelector('.about-section .typewrite');
const aboutTexts = JSON.parse(typewriteAbout.getAttribute('data-type'));
let aboutIndex = 0;
let aboutCharIndex = 0;
let isAboutDeleting = false;

function typeEffectAbout() {
    if (aboutCharIndex < aboutTexts[aboutIndex].length && !isAboutDeleting) {
        typewriteAbout.querySelector('.wrap').textContent += aboutTexts[aboutIndex][aboutCharIndex++];
        setTimeout(typeEffectAbout, 100);
    } else if (aboutCharIndex === aboutTexts[aboutIndex].length) {
        isAboutDeleting = true;
        setTimeout(typeEffectAbout, 100);
    } else if (aboutCharIndex > 0 && isAboutDeleting) {
        typewriteAbout.querySelector('.wrap').textContent = aboutTexts[aboutIndex].substr(0, --aboutCharIndex);
        setTimeout(typeEffectAbout, 50);
    } else {
        isAboutDeleting = false;
        aboutIndex = (aboutIndex + 1) % aboutTexts.length;
        setTimeout(typeEffectAbout, 500);
    }
}
typeEffectAbout();
