document.addEventListener('DOMContentLoaded', function() {
    const bookContainer = document.getElementById('bookContainer');

    // Dummy data for books
    const books = [
        { id: 1, title: "Jogos Vorazes", author: "Author 1", price: 10.99 },
        { id: 2, title: "Harry Potter", author: "Author 2", price: 12.99 },
        { id: 3, title: "Carros", author: "Author 3", price: 9.99 }
    ];

    // Function to display books in catalog
    function displayBooks() {
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
            bookContainer.appendChild(bookItem);
        });
    }

    // Function to add book to cart
    function addToCart(bookId) {
        const selectedBook = books.find(book => book.id === bookId);
        if (selectedBook) {
            // Simulate adding book to cart
            console.log(`Add to cart: ${selectedBook.title}`);
        }
    }

    // Function to view book details
    function viewDetails(bookId) {
        const selectedBook = books.find(book => book.id === bookId);
        if (selectedBook) {
            // Redirect to book details page
            window.location.href = `book_details.html?id=${selectedBook.id}`;
        }
    }

    // Display books when page loads
    displayBooks();
});