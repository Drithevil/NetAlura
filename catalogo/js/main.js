import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    // Verifica se estamos na página de seleção de perfis (index.html)
    const profilesContainer = document.querySelector('.profiles');
    if (profilesContainer) {
        // Adiciona event listeners aos links de perfil
        const profileLinks = document.querySelectorAll('.profile');
        profileLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Impede o redirecionamento imediato
                const img = link.querySelector('img');
                const figcaption = link.querySelector('figcaption');
                if (img && figcaption) {
                    const nome = figcaption.textContent;
                    const imagem = img.src;
                    localStorage.setItem('perfilAtivoNome', nome);
                    localStorage.setItem('perfilAtivoImagem', imagem);
                }
                // Redireciona para a página do catálogo
                window.location.href = link.href;
            });
        });
        return; // Sai da função, pois não há necessidade de carregar o catálogo
    }

    // Código para a página do catálogo
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
