// Scroll to initialize effect
let initialized = false;
window.addEventListener('scroll', () => {
    if (!initialized && window.scrollY > 50) {
        initialized = true;
        document.getElementById('scrollInit').style.opacity = '0';
        document.getElementById('heroContent').style.transition = 'opacity 1s';
        document.getElementById('heroContent').style.opacity = '1';
    }
});

// Smooth scroll
document.querySelectorAll('button, a').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.textContent.includes('SCHEMATICS')) {
            e.preventDefault();
            window.scrollTo({ top: document.querySelector('.stats-section').offsetTop, behavior: 'smooth' });
        }
    });
});

// Glitch effect on title
const title = document.querySelector('.main-title');
setInterval(() => {
    if (Math.random() > 0.95) {
        title.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        setTimeout(() => {
            title.style.transform = 'translate(0, 0)';
        }, 50);
    }
}, 100);
