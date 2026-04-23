// Tunggu dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // 2. Custom Cursor Glow
    const cursor = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        // Menggunakan requestAnimationFrame untuk performa lebih smooth
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    });

    // 3. Typing Effect (Typed.js)
    new Typed('#typing', {
        strings: [
            'I build modern, interactive, and high-quality websites',
            'I create elegant UI/UX experiences',
            'I develop responsive web applications'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // 4. Particles JS Configuration (Background Galaksi)
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00d2ff" },
            "shape": { "type": "circle" },
            "opacity": { 
                "value": 0.5, 
                "random": true, 
                "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } 
            },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#9d00ff",
                "opacity": 0.3,
                "width": 1
            },
            "move": { 
                "enable": true, 
                "speed": 2, 
                "direction": "none", 
                "random": false, 
                "straight": false, 
                "out_mode": "out", 
                "bounce": false 
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            }
        },
        "retina_detect": true
    });

    // 5. Project Filter Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus class active dari tombol sebelumnya
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.textContent.toLowerCase();

            projectCards.forEach(card => {
                const category = card.querySelector('.category').textContent.toLowerCase();
                if (filterValue === 'all' || category.includes(filterValue)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 6. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.8rem 8%';
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.padding = '1.2rem 8%';
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 7. Preloader Removal
    window.addEventListener('load', () => {
        const loader = document.getElementById('preloader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000); // Tahan 1 detik agar animasi terlihat premium
    });

    // 8. Smooth Scroll for Nav Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});