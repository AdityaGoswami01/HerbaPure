// Sticky Navbar on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
// Automatic Slideshow
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Start Slideshow on Page Load
document.addEventListener("DOMContentLoaded", showSlides);
// Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on page load
});
// Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        products.forEach(product => {
            const productTop = product.getBoundingClientRect().top;
            if (productTop < window.innerHeight - 100) {
                product.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on page load
});
// Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
    const uspCards = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        uspCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 100) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on page load
});
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Show the first slide initially
    showSlide(currentIndex);
});
// Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
    const blogCards = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        blogCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 100) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on page load
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            message.style.color = "#2E8B57";
            message.textContent = "Thank you for subscribing!";
            emailInput.value = ""; // Clear input
        } else {
            message.style.color = "red";
            message.textContent = "Please enter a valid email address.";
        }
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    // Scroll to top functionality
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Show button when scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
});

