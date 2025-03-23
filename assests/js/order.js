document.addEventListener("DOMContentLoaded", function () {
    const orderItemsContainer = document.getElementById("order-items");
    const totalPriceContainer = document.getElementById("total-price");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    displayOrderItems(cart);

    function displayOrderItems(items) {
        orderItemsContainer.innerHTML = "";
        let total = 0;

        items.forEach((item) => {
            total += item.price * item.quantity;
            const listItem = document.createElement("p");
            listItem.textContent = `${item.name} - ${item.quantity} x ₹${item.price}`;
            orderItemsContainer.appendChild(listItem);
        });

        totalPriceContainer.textContent = `Total: ₹${total.toFixed(2)}`;
    }

    // ✅ Handle Place Order Button
    document.getElementById("placeOrder").addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const paymentMethod = document.querySelector("input[name='payment']:checked").value;

        if (!name || !address || !phone) {
            alert("Please fill in all the shipping details.");
            return;
        }

        alert(`Order placed successfully! Payment Mode: ${paymentMethod}`);
        localStorage.removeItem("cart"); // Clear cart after order
        window.location.href = "index.html"; // Redirect to homepage
    });
});
