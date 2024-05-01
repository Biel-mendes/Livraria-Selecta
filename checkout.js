function processPayment(event) {
    event.preventDefault();
    
    // Obter detalhes do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    // Validar os campos do formulário (neste exemplo, validação muito básica)
    if (name && email && cardNumber && expiry && cvv) {
        // Simular processamento do pagamento
        alert('Pagamento confirmado! Obrigado pela compra!');
        // Redirecionar para a página inicial após o pagamento bem-sucedido
        window.location.href = 'principal.html';
    } else {
        alert('Por favor, preencha todos os campos do formulário.');
    }
}
