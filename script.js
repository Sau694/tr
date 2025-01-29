//navbar toggle //
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}
//hero section //
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

// Image Hover Effect for Service Page Galleries
document.addEventListener('DOMContentLoaded', () => {
    const imageCards = document.querySelectorAll('.image-card');

    imageCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const img = card.querySelector('img');
            img.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseout', () => {
            const img = card.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
});

// Smooth Scroll for Navbar Links
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("open");
}

//sliding image section //
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;

// Clone the first and last slides for seamless looping
const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[totalSlides - 1].cloneNode(true);
slider.appendChild(firstSlide);
slider.insertBefore(lastSlide, slides[0]);

// Adjust slider position to show the first slide
slider.style.transform = `translateX(-100%)`;

function autoSlide() {
  currentIndex++;
  slider.style.transition = "transform 1s ease-in-out";
  slider.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

  if (currentIndex === totalSlides) {
    setTimeout(() => {
      slider.style.transition = "none";
      slider.style.transform = `translateX(-100%)`;
      currentIndex = 0;
    }, 1000);
  }
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds


// hero section
// Smooth Scrolling Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Hover effect for image (adding smooth animation)
const heroImage = document.querySelector('.hero-image img');
heroImage.addEventListener('mouseenter', () => {
  heroImage.style.transform = 'scale(1.05)';
});
heroImage.addEventListener('mouseleave', () => {
  heroImage.style.transform = 'scale(1)';
});

