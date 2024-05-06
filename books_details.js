// book_details.js
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id');
    
    // Dummy data for book details
    const bookDetails = {
        1: { title: "Jogos Vorazes", author: "Author 1", price: 10.99, stock: 10, synopsis: "Sinopse do livro..." },
        2: { title: "Harry Potter", author: "Author 2", price: 12.99, stock: 8, synopsis: "Sinopse do livro..." },
        3: { title: "Carros", author: "Author 3", price: 9.99, stock: 15, synopsis: "Sinopse do livro..." }
    };

    const book = bookDetails[bookId];

    if (book) {
        const bookDetailsContainer = document.getElementById('book-details');
        const bookDetailsHTML = `
            <h2>${book.title}</h2>
            <p>Autor: ${book.author}</p>
            <p>Preço: $${book.price}</p>
            <p>Estoque: ${book.stock}</p>
            <p>Sinopse: ${book.synopsis}</p>
        `;
        bookDetailsContainer.innerHTML = bookDetailsHTML;
    } else {
        const bookDetailsContainer = document.getElementById('book-details');
        bookDetailsContainer.innerHTML = "<p>Livro não encontrado.</p>";
    }
});

var star = document.querySelectorAll('.star-icon');

document.addEventListener('click', function(e){
    var classStar = e.target.classList;
    if(!classStar.contains('ativo')){
        star.forEach(function(star){
            star.classList.remove('ativo');
        });
        classStar.add('ativo');
    }
});
