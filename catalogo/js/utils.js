// Função para extrair o ID do vídeo do YouTube da URL
export function getYouTubeId(url) {
    if (!url) return "7RUA0IOfar8";
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    return url.split('/').pop();
}

// Função para gerar uma pontuação de match aleatória entre 80 e 99
export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

// Função para gerar uma duração aleatória, dependendo se tem progresso
export function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

// Função para gerar um badge de idade aleatório
export function getRandomAgeBadge() {
    return Math.random() > 0.5 ? { text: 'A16', class: 'red-accent' } : { text: '16', class: '' };
}
