var options = {
    strings: ["Web Developer", "Programmer", "Cybersecurity Enthusiast", "Java Developer", "Open Source Contributor", "Learner", "Tech Enthusiast"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  };
  
  var typed = new Typed("#typed", options);
// Check if the element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animate progress bars on scroll
function animateProgressBars() {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress');

    if (isElementInViewport(skillsSection)) {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0'; // Reset to 0 for animation
            setTimeout(() => {
                bar.style.width = width; // Animate to original width
            }, 50);
        });
    }
}

window.addEventListener('scroll', animateProgressBars);


var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: -10,
      stretch: 0,
      depth: 80,
      modifier: 15,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    spaceBetween: 20, // Add space between cards
    loop: true, // Enable looping if needed
  });

