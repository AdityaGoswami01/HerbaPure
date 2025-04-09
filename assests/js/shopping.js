document.addEventListener("DOMContentLoaded", () => {
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCartBtn = document.getElementById("close-cart");
    const cartIcon = document.getElementById("cart-icon");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout");
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Open Cart
    cartIcon.addEventListener("click", () => {
      cartSidebar.classList.add("active");
    });
  
    // Close Cart
    closeCartBtn.addEventListener("click", () => {
      cartSidebar.classList.remove("active");
    });
  
    // Add to Cart
    addToCartButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        addToCart(name, price);
        cartSidebar.classList.add("active");
      });
    });
  
    function addToCart(name, price) {
      const existingItem = cart.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
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
      addCartListeners();
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    function addCartListeners() {
      document.querySelectorAll(".increase-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const item = cart.find(i => i.name === btn.dataset.name);
          if (item) item.quantity++;
          updateCart();
        });
      });
  
      document.querySelectorAll(".decrease-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const item = cart.find(i => i.name === btn.dataset.name);
          if (item.quantity > 1) {
            item.quantity--;
          } else {
            cart = cart.filter(i => i.name !== btn.dataset.name);
          }
          updateCart();
        });
      });
  
      document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          cart = cart.filter(i => i.name !== btn.dataset.name);
          updateCart();
        });
      });
    }
  
    checkoutButton.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Cart is empty!");
        return;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.href = "order.html";
    });
  
    updateCart();
  });

  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
  
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('show');
      });
    }
  });


  