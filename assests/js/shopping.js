// Future JavaScript functionality (e.g., dropdown menu, mobile nav) can be added here.
console.log("Header loaded successfully!");
// Sample Product Data
const products = [
    { id: 1, name: "Herbal Oil", category: "oils", price: 1200, image: "images/product3.webp", featured: true },
    { id: 2, name: "Ayurvedic Tea", category: "herbal-teas", price: 600, image: "images/product4.webp", featured: false },
    { id: 3, name: "Skin Care Cream", category: "skin-care", price: 900, image: "images/product1.webp", featured: true },
    { id: 4, name: "Health Supplement", category: "supplements", price: 2500, image: "supplement.jpg", featured: false },
    { id: 5, name: "Detox Capsules", category: "supplements", price: 1800, image: "capsules.jpg", featured: true },
    { id: 6, name: "Herbal Oil", category: "oils", price: 1200, image: "oil.jpg", featured: false },
    { id: 7, name: "Ayurvedic Tea", category: "herbal-teas", price: 600, image: "tea.jpg", featured: false },
    { id: 8, name: "Skin Care Cream", category: "skin-care", price: 900, image: "cream.jpg", featured: false },
    { id: 9, name: "Health Supplement", category: "supplements", price: 2500, image: "supplement.jpg", featured: false },
    { id: 10, name: "Detox Capsules", category: "supplements", price: 1800, image: "capsules.jpg", featured: false },
    { id: 11, name: "Herbal Oil", category: "oils", price: 1200, image: "oil.jpg", featured: false },
    { id: 12, name: "Ayurvedic Tea", category: "herbal-teas", price: 600, image: "tea.jpg", featured: false },
    { id: 13, name: "Skin Care Cream", category: "skin-care", price: 900, image: "cream.jpg", featured: false },
    { id: 14, name: "Health Supplement", category: "supplements", price: 2500, image: "supplement.jpg", featured: false },
    { id: 15, name: "Detox Capsules", category: "supplements", price: 1800, image: "capsules.jpg", featured: false }
];

// Function to Display Products
const displayProducts = (filteredProducts, containerId) => {
    const productList = document.getElementById(containerId);
    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">₹${product.price}</p>
            </div>
        `;
    });
};

// Load All Products
displayProducts(products, "product-list");

// Load Featured Products
const featuredProducts = products.filter(product => product.featured);
displayProducts(featuredProducts, "featured-list");
