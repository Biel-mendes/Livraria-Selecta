// Dummy data for books
const books = [
    { id: 1, title: "Jogos Vorazes", author: "Author 1", price: 10.99 },
    { id: 2, title: "Harry Potter", author: "Author 2", price: 12.99 },
    { id: 3, title: "Carros", author: "Author 3", price: 9.99 }
];

// Dummy data for user authentication
let isAuthenticated = false;

// Function to display books in catalog
function displayBooks() {
    const catalogSection = document.getElementById("book-catalog");

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>By ${book.author}</p>
            <p>Price: $${book.price}</p>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
            <button onclick="viewDetails(${book.id})">View Details</button>
        `;
        catalogSection.appendChild(bookItem);
    });
}

// Function to add book to cart
function addToCart(bookId) {
    const selectedBook = books.find(book => book.id === bookId);
    if (selectedBook) {
        // Simulate adding book to cart
        const cartItems = document.getElementById("cart-items");
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <p>${selectedBook.title} - $${selectedBook.price}</p>
        `;
        cartItems.appendChild(cartItem);
    }
}

// Function to view book details
function viewDetails(bookId) {
    const selectedBook = books.find(book => book.id === bookId);
    if (selectedBook) {
        // Redirect to book details page (not implemented in this example)
        console.log(`View details for ${selectedBook.title}`);
    }
}

// Function to toggle cart modal
function toggleCartModal() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Function to handle checkout
function checkout() {
    if (isAuthenticated) {
        // Redirect to checkout page (not implemented in this example)
        console.log("Redirect to checkout page");
    } else {
        alert("Please login to proceed with checkout.");
    }
}

// Event listeners
document.getElementById("cart").addEventListener("click", toggleCartModal);
document.querySelector(".close").addEventListener("click", toggleCartModal);
document.getElementById("checkout-btn").addEventListener("click", checkout);

// Display books when page loads
window.onload = function() {
    displayBooks();
};