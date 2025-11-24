
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

let cartCount = 0;
const cartButtons = document.querySelectorAll('.add-btn');
const cartCountDesktop = document.getElementById('cart-count');
const cartCountMobile = document.getElementById('cart-count-mobile');

cartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        cartCountDesktop.textContent = cartCount;
        cartCountMobile.textContent = cartCount;
        btn.textContent = 'Added';
        setTimeout(() => { btn.textContent = 'Add to Bag'; }, 1000);
    });
});
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
 