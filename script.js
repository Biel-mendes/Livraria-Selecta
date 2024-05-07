document.addEventListener('DOMContentLoaded', function() {
    // Declaração de elementos do DOM
    const bookContainer = document.getElementById('book-catalog');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const cartModal = document.getElementById('cart-modal-home');
    const cartItems = document.getElementById('cart-items-home');
    const checkoutBtn = document.getElementById('checkout-btn-home');
    const loginLink = document.getElementById('login');

    // Dados fictícios dos livros
    const books = [
        { id: 1, title: "Jogos Vorazes", author: "Author 1", price: 10.99, stock: 10 },
        { id: 2, title: "Harry Potter", author: "Author 2", price: 12.99, stock: 8 },
        { id: 3, title: "Carros", author: "Author 3", price: 9.99, stock: 15 },
        { id: 4, title: "Dom Casmurro", author: "Machado de Assis", price: 25.50, stock: 5 },
        { id: 5, title: "Memórias Póstumas de Brás Cubas", author: "Machado de Assis", price: 30.75, stock: 3 },
        { id: 6, title: "Grande Sertão: Veredas", author: "João Guimarães Rosa", price: 35.20, stock: 7 }
    ];

    // Estado fictício da autenticação do usuário
    let isAuthenticated = false;

    // Array do carrinho para armazenar itens selecionados
    let cart = [];

    // Função para formatar preço
    function formatPrice(price) {
        return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    // Função para exibir livros
    function displayBooks(filteredBooks = books) {
        bookContainer.innerHTML = ""; // Limpa o conteúdo anterior
        filteredBooks.forEach(book => {
            const bookItem = createBookCard(book);
            bookContainer.appendChild(bookItem);
        });
    }

    // Função para criar um card de livro
    function createBookCard(book) {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>Por ${book.author}</p>
            <p>Preço: R$ ${formatPrice(book.price)}</p>
            <button onclick="addToCart(${book.id})">Adicionar ao Carrinho</button>
            <button onclick="viewDetails(${book.id})">Ver Detalhes</button>
        `;
        return card;
    }

    // Função para adicionar livro ao carrinho
    function addToCart(bookId) {
        const selectedBook = books.find(book => book.id === bookId);
        if (selectedBook) {
            const existingCartItem = cart.find(item => item.id === selectedBook.id);
            if (existingCartItem) {
                existingCartItem.quantity++;
            } else {
                cart.push({ ...selectedBook, quantity: 1 });
            }
            updateCart();
            saveCartToLocalStorage();
        }
    }

    // Função para atualizar o carrinho
    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `<p>${item.title} - R$ ${formatPrice(item.price)} - Quantidade: ${item.quantity}</p>`;
            cartItems.appendChild(cartItem);
        });
    }

    // Função para lidar com o checkout
    function handleCheckout() {
        if (isAuthenticated) {
            console.log("Redirecionar para a página de checkout");
            // Implemente a lógica para redirecionar para a página de checkout aqui
        } else {
            alert("Faça login para prosseguir com o checkout.");
        }
    }

    // Função para pesquisar livros
    function searchBooks() {
        const searchQuery = searchInput.value.trim().toLowerCase();
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchQuery));
        displayBooks(filteredBooks);
    }

    // Eventos
    searchBtn.addEventListener('click', searchBooks);
    checkoutBtn.addEventListener('click', handleCheckout);

    // Função para salvar carrinho no localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Função para carregar carrinho do localStorage
    function loadCartFromLocalStorage() {
        const cartFromStorage = localStorage.getItem('cart');
        if (cartFromStorage) {
            cart = JSON.parse(cartFromStorage);
            updateCart();
        }
    }

    // Exibir livros quando a página carrega e carregar carrinho do localStorage
    window.onload = function() {
        displayBooks();
        loadCartFromLocalStorage();
    };
});