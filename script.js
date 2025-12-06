
const bod = document.body;
const tgl = document.getElementById('md-tgl');
const nav = document.querySelectorAll('.nav a');


const thm = localStorage.getItem('thm');
if (thm === 'drk') {
    bod.classList.add('dark-mode');
    tgl.textContent = 'Light Mode';
}


tgl.addEventListener('click', () => {
    bod.classList.toggle('dark-mode');
    
    if (bod.classList.contains('dark-mode')) {
        tgl.textContent = 'Light Mode';
        localStorage.setItem('thm', 'drk');
    } else {
        tgl.textContent = 'Dark Mode';
        localStorage.setItem('thm', 'lgt');
    }
});


nav.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href');
        const el = document.querySelector(id);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    });
});