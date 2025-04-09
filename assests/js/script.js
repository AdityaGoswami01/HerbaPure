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
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});

// Automatic Slideshow
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
    setTimeout(showSlides, 4000);
}
document.addEventListener("DOMContentLoaded", showSlides);

// Scroll Animation
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    function fadeInOnScroll() {
        fadeElements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight - 100) {
                element.classList.add("show");
            }
        });
    }
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

// Testimonial Slider
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 5000);

        showSlide(currentIndex);
    }
});

// Newsletter Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newsletter-form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const emailInput = document.getElementById("email");
            const message = document.getElementById("message");
            const email = emailInput.value.trim();
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                message.style.color = "#2E8B57";
                message.textContent = "Thank you for subscribing!";
                emailInput.value = "";
            } else {
                message.style.color = "red";
                message.textContent = "Please enter a valid email address.";
            }
        });
    }
});

// Scroll to Top Button
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (scrollToTopBtn) {
        window.addEventListener("scroll", () => {
            scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });
        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

// Shopping Cart Functionality
document.addEventListener("DOMContentLoaded", () => {
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCartBtn = document.getElementById("close-cart");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // ✅ Add to Cart
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const name = e.target.dataset.name;
            const price = parseFloat(e.target.dataset.price);
            addToCart(name, price);
            cartSidebar.classList.add("active");
        });
    });

    // ✅ Close Cart Sidebar
    if (closeCartBtn) {
        closeCartBtn.addEventListener("click", () => {
            cartSidebar.classList.remove("active");
        });
    }

    // ✅ Checkout Button - Redirect to Order Page
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
        window.location.href = "order.html"; // Redirect to order page
    });

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCart();
    }

    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${item.name} (₹${item.price})</span>
                <div class="quantity-controls">
                    <button class="decrease-btn" data-name="${item.name}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-btn" data-name="${item.name}">+</button>
                </div>
                <button class="remove-btn" data-name="${item.name}">✖</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartTotal.innerText = `₹${total.toFixed(2)}`;

        // Add event listeners for increase, decrease, and remove buttons
        document.querySelectorAll(".increase-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const name = btn.dataset.name;
                const item = cart.find(i => i.name === name);
                if (item) item.quantity += 1;
                updateCart();
            });
        });

        document.querySelectorAll(".decrease-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const name = btn.dataset.name;
                const item = cart.find(i => i.name === name);
                if (item && item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    cart = cart.filter(i => i.name !== name);
                }
                updateCart();
            });
        });

        document.querySelectorAll(".remove-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const name = btn.dataset.name;
                cart = cart.filter(i => i.name !== name);
                updateCart();
            });
        });

        
        // Save cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Initial load
    updateCart();
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[data-target]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetClass = this.getAttribute("data-target");
            const targetElement = document.querySelector(targetClass);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
