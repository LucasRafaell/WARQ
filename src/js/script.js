document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const menu = document.querySelector('nav ul.menu');

    mobileMenuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    const prevButton = document.querySelector('.carousel-button.left');
    const nextButton = document.querySelector('.carousel-button.right');
    const teamCarouselContainer = document.querySelector('.team-carousel-container');

    prevButton.addEventListener('click', function() {
        teamCarouselContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', function() {
        teamCarouselContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });

    // Adiciona interação de toque ao carrossel
    let startX;
    let scrollLeft;

    teamCarouselContainer.addEventListener('mousedown', (e) => {
        startX = e.pageX - teamCarouselContainer.offsetLeft;
        scrollLeft = teamCarouselContainer.scrollLeft;
        teamCarouselContainer.classList.add('active');
    });

    teamCarouselContainer.addEventListener('mouseleave', () => {
        teamCarouselContainer.classList.remove('active');
    });

    teamCarouselContainer.addEventListener('mouseup', () => {
        teamCarouselContainer.classList.remove('active');
    });

    teamCarouselContainer.addEventListener('mousemove', (e) => {
        if (!teamCarouselContainer.classList.contains('active')) return;
        e.preventDefault();
        const x = e.pageX - teamCarouselContainer.offsetLeft;
        const walk = (x - startX) * 2; // Ajuste a sensibilidade aqui
        teamCarouselContainer.scrollLeft = scrollLeft - walk;
    });

    // Adiciona interação de toque para dispositivos móveis
    let startTouchX;
    let startTouchScrollLeft;

    teamCarouselContainer.addEventListener('touchstart', (e) => {
        startTouchX = e.touches[0].pageX - teamCarouselContainer.offsetLeft;
        startTouchScrollLeft = teamCarouselContainer.scrollLeft;
    });

    teamCarouselContainer.addEventListener('touchmove', (e) => {
        const touchX = e.touches[0].pageX - teamCarouselContainer.offsetLeft;
        const touchWalk = (touchX - startTouchX) * 2; // Ajuste a sensibilidade aqui
        teamCarouselContainer.scrollLeft = startTouchScrollLeft - touchWalk;
    });
});
