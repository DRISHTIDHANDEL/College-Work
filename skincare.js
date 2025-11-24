
let cartCount = 0;

const addButtons = document.querySelectorAll('.add-btn');
addButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        cartCount++;
        alert('Product added to cart!');
        updateCart();
    });
});


function updateCart() {
    const cartBtn = document.querySelector('.cart-btn');
    if(cartBtn) {
        cartBtn.textContent = `Cart (${cartCount})`;
    }
}


const filterLinks = document.querySelectorAll('.filter-link');
filterLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const category = link.dataset.category;
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {
            const productCat = product.querySelector('.product-category').textContent;
            if(category === 'All' || productCat === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

updateCart();
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
 <script src="cart.js"></script>