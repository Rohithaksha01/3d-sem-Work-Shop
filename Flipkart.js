// Banner Carousel Functionality (Basic)
let bannerIndex = 0;
const banners = document.querySelectorAll('.banner img');
setInterval(() => {
    banners[bannerIndex].style.display = 'none';
    bannerIndex = (bannerIndex + 1) % banners.length;
    banners[bannerIndex].style.display = 'block';
}, 3000);

// Simulated Cart Functionality
const cartButtons = document.querySelectorAll('.product-card button');
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
