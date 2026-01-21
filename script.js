function expandCard(element) {
    // Alterna a classe 'active' para expandir ou recolher o card
    element.classList.toggle('active');
    
    // Opcional: fecha os outros cards ao abrir um novo (foco único)
    document.querySelectorAll('.card-item').forEach(card => {
        if (card !== element) {
            card.classList.remove('active');
        }
    });
}