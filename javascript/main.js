// header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
};

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (e) {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    });
});

// Fetch the query string from the URL
const params = new URLSearchParams(window.location.search);
const product = params.get('product');

// Create a product data array to simulate product info
const productsData = {
    melon: {
        name: 'Melon',
        price: 70,
        description: 'A sweet and refreshing melon.',
        image: './assets/images/products/product-1.jpg'
    },
    orange: {
        name: 'Orange',
        price: 60,
        description: 'A juicy orange full of vitamin C.',
        image: './assets/images/products/product-2.jpg'
    },
    apple: {
        name: 'Apple',
        price: 100,
        description: 'A crisp apple bursting with sweetness.',
        image: './assets/images/products/product-3.jpg'
    },
    dragonfruit: {
        name: 'Dragon Fruit',
        price: 150,
        description: 'A vibrant dragonfruit with a refreshing flavor.',
        image: './assets/images/products/product-4.jpg'
    },
    broccoli: {
        name: 'Broccoli',
        price: 100,
        description: 'A nutritious broccoli loaded with vitamins.',
        image: './assets/images/products/product-5.jpg'
    },
    tomato: {
        name: 'Cherry Tomato',
        price: 50,
        description: 'A sweet cherry tomato that bursts with juiciness.',
        image: './assets/images/products/product-6.jpg'
    },
    capsicum: {
        name: 'Capsicum',
        price: 70,
        description: 'A colorful capsicum full of flavor and crunch.',
        image: './assets/images/products/product-7.jpg'
    },
    cabbage: {
        name: 'Cabbage',
        price: 50,
        description: 'A crunchy cabbage packed with nutrients.',
        image: './assets/images/products/product-8.jpg'
    },
    
};

// Cart array to hold added products
let cart = [];

// Function to update the cart display
function updateCartDisplay() {
    const cartList = document.getElementById('cartList');
    const totalPriceDisplay = document.getElementById('totalPrice');
    cartList.innerHTML = ''; // Clear existing cart items
    let totalPrice = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerText = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        totalPrice += item.price; // Accumulate total price
    });

    totalPriceDisplay.innerText = `Total: $${totalPrice}`;
}

// Check if a product is selected and exists in the productsData
if (product && productsData[product]) {
    const productData = productsData[product];

    // Get modal elements
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductDescription = document.getElementById('modalProductDescription');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const addToCartButton = document.getElementById('addToCartButton');

    // Set the modal content
    modalProductImage.src = productData.image;
    modalProductName.innerText = productData.name;
    modalProductDescription.innerText = productData.description;
    modalProductPrice.innerText = `$${productData.price}`;

    // Show the modal
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productModal.show();

    // Add event listener to the "Add to Cart" button
    addToCartButton.addEventListener('click', function () {
        // Add product data to cart
        cart.push(productData);
        updateCartDisplay(); // Update the cart display
        productModal.hide(); // Hide the modal after adding to cart
    });
}
