// header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 50 ) {
        nav.classList.add("header-scrolled");
    }
    else
    nav.classList.remove("header-scrolled");
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
    e.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    })
})

// define product data
const products = {
    "melon": {
      name: "Melon",
      image: "./assets/images/products/product-1.jpg",
      price: "$70",
      description: "A fresh and delicious melon, perfect for a summer snack."
    },
    "orange": {
      name: "Orange",
      image: "./assets/images/products/product-2.jpg",
      price: "$100",
      description: "A crisp and juicy apple, ideal for healthy snacking."
    },
    "apple": {
      name: "Apple",
      image: "./assets/images/products/product-3.jpg",
      price: "$100",
      description: "A crisp and juicy apple, ideal for healthy snacking."
    },
    "dragonfruit": {
      name: "Dragonfruit",
      image: "./assets/images/products/product-4.jpg",
      price: "$100",
      description: "A crisp and juicy apple, ideal for healthy snacking."
    },
  };

//   console.log(products.apple)

// Function to get URL parameters
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Initialize cart array outside the product retrieval block
let cart = [];


// Get the product name from the URL

const productName = getQueryParameter('product');

if (productName && products[productName]) {
    const product = products[productName];

    // Set the product details in the HTML
    document.getElementById('product-image').src = product.image; // Set image source
    document.getElementById('product-name').textContent = product.name; // Set product name
    document.getElementById('product-description').textContent = product.description; // Set product description
    document.getElementById('product-price').textContent = product.price; // Set product price
    

    // Add event listener to the "Add to Cart" button
    document.getElementById('add-to-cart').addEventListener('click', function () {
        addToCart(product);
    });
} else {
    console.error('Product not found');
}

// Function to add product to cart
function addToCart(product) {
    // Push the product to the cart
    cart.push(product);
    
    // Calculate total
    const totalPrice = cart.reduce((total, item) => {
        const priceValue = parseFloat(item.price.replace('$', '')); // Remove '$' and convert to float
        return total + priceValue;
    }, 0);

    // Create the product summary HTML
    const summaryHTML = `
        <div class="cart-item">
            <h3>Product Added to Cart</h3>
            <p><strong>Name:</strong> ${product.name}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>
        </div>
    `;

    // Insert the summary into the cart summary section
    document.getElementById('cart-summary').innerHTML = summaryHTML;
    
    // Log the cart for debugging purposes
    console.log(cart);
}


