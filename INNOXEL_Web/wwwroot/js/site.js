window.initScrollAnimations = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
};

window.initHeroParallax = () => {
    const heroImages = document.querySelectorAll('.hero-carousel img');
    window.addEventListener('scroll', () => {
        const offset = window.scrollY;
        heroImages.forEach(img => {
            img.style.transform = `scale(${1 + offset / 2000})`;
        });
    });
};



function parallaxScroll() {
    const sections = document.querySelectorAll('.parallax-section');
    sections.forEach(section => {
        const offset = window.pageYOffset;
        section.style.backgroundPositionY = `${offset * 0.5}px`;
    });
}
window.addEventListener('scroll', parallaxScroll);