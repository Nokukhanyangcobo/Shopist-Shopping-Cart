let cart = [];

function addToCart(itemId) {
    // Add item to the cart
    cart.push(itemId);
    updateCart();
}

function removeFromCart(itemId) {
    // Remove item from the cart
    cart = cart.filter(item => item !== itemId);
    updateCart();
}

function updateCart() {
    // Update the cart display
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";

    cart.forEach(itemId => {
        const listItem = document.createElement("li");
        listItem.textContent = `Clothing Item ${itemId}`;
        cartItemsElement.appendChild(listItem);
    });

    // Calculate and display total
    const totalElement = document.getElementById("total");
    const totalAmount = calculateTotal();
    totalElement.textContent = `Total: R ${totalAmount.toFixed(2)}`;
}

function calculateTotal() {
    // Calculate the total amount (dummy calculation for illustration)
    const unitPrice = 50; // Dummy price per item
    const vatRate = 0.15; // Dummy VAT rate
    const deliveryCost = 20; // Dummy delivery cost

    const subtotal = cart.length * unitPrice;
    const vat = subtotal * vatRate;
    const total = subtotal + vat + deliveryCost;

    return total;
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
function checkout() {
    // Redirect to checkout page (dummy URL for illustration)
    window.location.href = "checkout.html";
}

function handleCheckout(event) {
  event.preventDefault();

  // Dummy validation (you should perform proper validation)
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const cardNumber = document.getElementById("card-number").value;
  const expiryDate = document.getElementById("expiry-date").value;
  const cvv = document.getElementById("cvv").value;

  if (!name || !email || !cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all fields.");
      return;
  }

  // Dummy processing (you should use a secure server-side process)
  alert("Purchase successful! Thank you for shopping with us.");
  window.location.href = "index.html"; // Redirect to the main page after successful purchase
}
