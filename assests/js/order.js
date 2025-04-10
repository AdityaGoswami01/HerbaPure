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
document.getElementById('placeOrder').addEventListener('click', function() {
    // Get user input from the shipping details section
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('Address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const pinCode = document.getElementById('pinCode').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked');

    // Check if any of the required fields are empty
    if (!name || !phone || !address || !city || !state || !pinCode || !paymentMethod) {
        // Display an error message if any fields are empty
        alert('Please fill in all the fields before placing the order.');
        return;
    }

    // Create a confirmation message
    const confirmationMessage = `
        Thank you, ${name}! Your order has been placed successfully.
        <br>
        <strong>Shipping Details:</strong> ${address}, ${city}, ${state} - ${pinCode}, ${phone}
        <br>
        <strong>Payment Method:</strong> ${paymentMethod.value.toUpperCase()}
        <br>
        Your order will be delivered soon.
    `;
    
    // Display the pop-up message
    const popup = document.createElement('div');
    popup.classList.add('popup-message');
    popup.innerHTML = confirmationMessage;
    
    // Append popup to body
    document.body.appendChild(popup);
    
    // Close the popup after 5 seconds
    setTimeout(() => {
        popup.style.display = 'none';
    }, 5000);
});
