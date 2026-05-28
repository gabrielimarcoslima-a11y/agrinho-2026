// Função para mostrar informações extras ao clicar nos cards
function revelarDica(id) {
    const painel = document.getElementById('painel-info');
    const texto = document.getElementById('texto-dinamico');
    
    painel.style.display = 'block';
    painel.style.padding = '20px';
    painel.style.marginTop = '30px';
    painel.style.borderRadius = '10px';
    painel.style.backgroundColor = 'rgba(255,255,255,0.9)';
    painel.style.color = '#1b4332';
    
    const dicas = {
        1: "💡 Sabia? O uso de drones reduz em até 30% o uso de insumos químicos, protegendo o solo!",
        2: "🌳 Reservas Legais ajudam a controlar pragas naturalmente, pois abrigam pássaros e insetos benéficos.",
        3: "♻️ O biogás gerado a partir de resíduos animais pode abastecer fazendas inteiras com energia limpa."
    };
    
    texto.innerText = dicas[id];
    
    // Rolagem suave até a informação
    painel.scrollIntoView({ behavior: 'smooth' });
}

// Efeito de aparecer ao rolar (Scroll Reveal)
window.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.card, .texto-sobre');
    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        if(posicao < window.innerHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});
