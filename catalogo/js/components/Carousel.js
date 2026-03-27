// Importa a função para criar cartões
import { createCard } from './Card.js';

// Função para criar um carrossel de categoria
export function createCarousel(category) {
    // Cria a seção do slider
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Cabeçalho com título e indicadores
    const header = document.createElement('div');
    header.className = 'slider-header';

    // Título da categoria
    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    // Indicadores de página
    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    // Adiciona título e indicadores ao cabeçalho
    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    // Linha de filmes
    const row = document.createElement('div');
    row.className = 'movie-row';

    // Cria cartões para cada item da categoria
    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    // Adiciona a linha à seção
    section.appendChild(row);
    // Retorna a seção criada
    return section;
}
