document.addEventListener('DOMContentLoaded', function() {
    const bookContainer = document.getElementById('bookContainer');
    const searchTitleInput = document.getElementById('search-title');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const searchPriceBtn = document.getElementById('search-price-btn');

    // Dummy data for books
    const books = [
        { id: 1, title: "Jogos Vorazes", author: "Author 1", price: 10.99 },
        { id: 2, title: "Harry Potter", author: "Author 2", price: 12.99 },
        { id: 3, title: "Carros", author: "Author 3", price: 9.99 }
    ];

    // Function to display books in catalog
    function displayBooks(booksToDisplay) {
        bookContainer.innerHTML = '';

        booksToDisplay.forEach(book => {
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

    // Function to search books by title
    function searchByTitle() {
        const searchInput = searchTitleInput.value.trim().toLowerCase();

        if (searchInput !== '') {
            const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput));
            displayBooks(filteredBooks);
        } else {
            displayBooks(books);
        }
    }

    // Function to search books by price range
    function searchByPriceRange() {
        const minPrice = parseFloat(minPriceInput.value);
        const maxPrice = parseFloat(maxPriceInput.value);

        if (!isNaN(minPrice) && !isNaN(maxPrice) && minPrice <= maxPrice) {
            const filteredBooks = books.filter(book => book.price >= minPrice && book.price <= maxPrice);
            displayBooks(filteredBooks);
        } else {
            displayBooks([]);
        }
    }

    // Display all books when page loads
    displayBooks(books);

    // Add input event listener for title search
    searchTitleInput.addEventListener('input', searchByTitle);

    // Add click event listener for price range search
    searchPriceBtn.addEventListener('click', searchByPriceRange);
});

// books.js
document.addEventListener('DOMContentLoaded', function() {
    const bookContainer = document.getElementById('bookContainer');
    const searchForm = document.getElementById('search-form');

    // Dummy data for books
    const books = [
        { id: 1, title: "Jogos Vorazes", author: "Author 1", price: 10.99, stock: 10 },
        { id: 2, title: "Harry Potter", author: "Author 2", price: 12.99, stock: 8 },
        { id: 3, title: "Carros", author: "Author 3", price: 9.99, stock: 15 }
    ];

    // Function to display books in catalog
    function displayBooks(filteredBooks = books) {
        bookContainer.innerHTML = ""; // Limpa o conteúdo anterior
        filteredBooks.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book-item");
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Autor: ${book.author}</p>
                <p>Preço: $${book.price}</p>
                <p>Estoque: ${book.stock}</p>
            `;
            bookContainer.appendChild(bookItem);
        });
    }

    // Search function
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchQuery = document.getElementById('search-input').value.trim().toLowerCase();
        const priceQuery = parseFloat(document.getElementById('price-input').value);
        
        let filteredBooks = books;
        if (searchQuery !== "") {
            filteredBooks = filteredBooks.filter(book => book.title.toLowerCase().includes(searchQuery));
        }
        if (!isNaN(priceQuery)) {
            filteredBooks = filteredBooks.filter(book => book.price <= priceQuery);
        }
        
        displayBooks(filteredBooks);
    });

    // Display all books initially
    displayBooks();
});

// books.js
document.addEventListener('DOMContentLoaded', function() {
    const bookContainer = document.getElementById('bookContainer');

    // Dummy data for books
    const books = [
        { id: 1, title: "Jogos Vorazes", author: "Author 1", price: 10.99, stock: 10 },
        { id: 2, title: "Harry Potter", author: "Author 2", price: 12.99, stock: 8 },
        { id: 3, title: "Carros", author: "Author 3", price: 9.99, stock: 15 }
    ];

    // Function to display books in catalog
    function displayBooks() {
        books.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book-item");
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Autor: ${book.author}</p>
                <p>Preço: $${book.price}</p>
                <p>Estoque: ${book.stock}</p>
                <a href="book_details.html?id=${book.id}">Ver Detalhes</a>
            `;
            bookContainer.appendChild(bookItem);
        });
    }

    // Display books when page loads
    displayBooks();
});

// books.js
document.addEventListener('DOMContentLoaded', function() {
    const bookContainer = document.getElementById('bookContainer');

    // Dummy data for books
    const books = [
        { id: 1, title: "Jogos Vorazes", author: "Author 1", price: 10.99, stock: 10 },
        { id: 2, title: "Harry Potter", author: "Author 2", price: 12.99, stock: 8 },
        { id: 3, title: "Carros", author: "Author 3", price: 9.99, stock: 15 }
    ];

    // Function to display books in catalog
    function displayBooks(booksToShow) {
        bookContainer.innerHTML = ""; // Limpar o conteúdo anterior
        booksToShow.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book-item");
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Autor: ${book.author}</p>
                <p>Preço: $${book.price}</p>
                <p>Estoque: ${book.stock}</p>
                <a href="book_details.html?id=${book.id}">Ver Detalhes</a>
            `;
            bookContainer.appendChild(bookItem);
        });
    }

    // Display all books when page loads
    displayBooks(books);
});

function filterBooks() {
    const minPrice = parseFloat(document.getElementById("minPrice").value);
    const maxPrice = parseFloat(document.getElementById("maxPrice").value);

    // Filter books based on price range
    const filteredBooks = books.filter(book => {
        return (!minPrice || book.price >= minPrice) &&
               (!maxPrice || book.price <= maxPrice);
    });

    // Display filtered books
    displayBooks(filteredBooks);
}
