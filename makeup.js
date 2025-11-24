
const navToggle = document.getElementById('navToggle');
const navMobileMenu = document.getElementById('navMobileMenu');

navToggle.addEventListener('click', () => {
    navMobileMenu.classList.toggle('active');
    navMobileMenu.style.display = navMobileMenu.classList.contains('active') ? 'flex' : 'none';
});


const cartButtons = document.querySelectorAll('.add-btn');
const cartBtn = document.querySelector('.cart-btn');
let cartCount = 0;

cartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        cartBtn.textContent = `Cart (${cartCount})`;
        alert(`${btn.dataset.product} added to cart!`);
    });
});
const toggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".nav-mobile");

toggle.addEventListener("click", () => {
    mobileNav.style.display = mobileNav.style.display === "flex" ? "none" : "flex";
});
 function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const found = cart.find(p => p.id === product.id);
    if (found) found.qty += 1;
    else cart.push({...product, qty:1});
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cart-count").innerText = cart.length;
    alert(`${product.name} added to cart!`);
}
