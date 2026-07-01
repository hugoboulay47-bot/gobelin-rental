let cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartPanel = document.getElementById("cartPanel");
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");

function addToCart(gobelin) {
  cart.push(gobelin);
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.length;

  cartList.innerHTML = "";
  cart.forEach((g, i) => {
    let li = document.createElement("li");
    li.textContent = g;
    cartList.appendChild(li);
  });
}

cartBtn.addEventListener("click", () => {
  cartPanel.style.display =
    cartPanel.style.display === "block" ? "none" : "block";
});

function clearCart() {
  cart = [];
  updateCart();
}