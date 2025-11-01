// Main JavaScript untuk Website HIMABIS
// Data diambil dari config.js

document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi website dengan data dari config
    initializeWebsite();

    // Setup event listeners
    setupEventListeners();

    // Setup animations
    setupAnimations();
});

function initializeWebsite() {
    // Load data dari CONFIG
    loadOrganizationData();
    loadHeroSection();
    loadAboutSection();
    loadPengurusSection();
    loadKegiatanSection();
    loadContactSection();
    loadFooterSection();
}

function loadOrganizationData() {
    // Set organization name di berbagai tempat
    document.getElementById('org-name').textContent = CONFIG.ORGANIZATION.NAME;
    document.getElementById('org-full-name').textContent = CONFIG.ORGANIZATION.FULL_NAME;
    document.getElementById('footer-org-name').textContent = CONFIG.ORGANIZATION.NAME;
    document.getElementById('copyright-org-name').textContent = CONFIG.ORGANIZATION.NAME;

    // Set developer name
    document.getElementById('developer-name').textContent = CONFIG.SITE.AUTHOR;

    // Set experience years
    document.getElementById('experience-years').textContent = CONFIG.ORGANIZATION.EXPERIENCE_YEARS + '+';
}

function loadHeroSection() {
    // Set hero title dan description
    document.getElementById('hero-title').innerHTML = CONFIG.ORGANIZATION.TAGLINE.replace('Pemimpin Bisnis', '<span>Pemimpin Bisnis</span>');
    document.getElementById('hero-description').textContent = CONFIG.ORGANIZATION.DESCRIPTION;

    // Load stats
    const statsContainer = document.getElementById('hero-stats');
    statsContainer.innerHTML = CONFIG.STATS.map(stat => `
        <div class="stat-item">
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');

    // Load floating cards
    const floatingCards = document.getElementById('floating-cards');
    floatingCards.innerHTML = CONFIG.FEATURES.map((feature, index) => `
        <div class="floating-card" style="animation-delay: ${index * 2}s;">
            <div class="card-icon">
                <i class="${feature.icon}"></i>
            </div>
            <div>
                <h4>${feature.title}</h4>
                <p>${feature.description}</p>
            </div>
        </div>
    `).join('');
}

function loadAboutSection() {
    // Set about title
    document.getElementById('about-title').textContent = CONFIG.ABOUT.TITLE;

    // Set about description
    const aboutDesc = document.getElementById('about-description');
    aboutDesc.innerHTML = CONFIG.ABOUT.DESCRIPTION.map(desc => `<p>${desc}</p>`).join('');

    // Load about features
    const aboutFeatures = document.getElementById('about-features');
    aboutFeatures.innerHTML = CONFIG.ABOUT.FEATURES.map(feature => `
        <div class="feature-item">
            <div class="feature-icon">
                <i class="fas fa-check"></i>
            </div>
            <div>
                <h4>${feature.title}</h4>
                <p>${feature.description}</p>
            </div>
        </div>
    `).join('');
}

function loadPengurusSection() {
    const pengurusGrid = document.getElementById('pengurus-grid');
    pengurusGrid.innerHTML = CONFIG.PENGURUS.map((pengurus, index) => `
        <div class="pengurus-card fade-in">
            <img src="${pengurus.photo}" alt="${pengurus.name}" class="pengurus-img">
            <div class="pengurus-info">
                <h3>${pengurus.name}</h3>
                <p>${pengurus.position}</p>
                <div class="pengurus-social">
                    ${pengurus.social.linkedin ? `<a href="${pengurus.social.linkedin}"><i class="fab fa-linkedin-in"></i></a>` : ''}
                    ${pengurus.social.instagram ? `<a href="${pengurus.social.instagram}"><i class="fab fa-instagram"></i></a>` : ''}
                    ${pengurus.social.twitter ? `<a href="${pengurus.social.twitter}"><i class="fab fa-twitter"></i></a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function loadKegiatanSection() {
    const kegiatanSlides = document.getElementById('kegiatan-slides');
    const slideIndicators = document.getElementById('slide-indicators');

    kegiatanSlides.innerHTML = CONFIG.KEGIATAN.map((kegiatan, index) => `
        <div class="kegiatan-slide">
            <img src="${kegiatan.image}" alt="${kegiatan.title}">
            <div class="slide-content">
                <h3>${kegiatan.title}</h3>
                <p>${kegiatan.description}</p>
                <small>${kegiatan.date}</small>
            </div>
        </div>
    `).join('');

    slideIndicators.innerHTML = CONFIG.KEGIATAN.map((_, index) => `
        <div class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
    `).join('');
}

function loadContactSection() {
    // Set contact information
    document.getElementById('contact-address').textContent = CONFIG.CONTACT.ADDRESS;
    document.getElementById('contact-email').textContent = CONFIG.CONTACT.EMAIL;
    document.getElementById('contact-phone').textContent = CONFIG.CONTACT.PHONE;

    // Load social links
    const socialLinks = document.getElementById('social-links');
    const socialMedia = CONFIG.CONTACT.SOCIAL_MEDIA;

    socialLinks.innerHTML = `
        ${socialMedia.instagram ? `<a href="${socialMedia.instagram}"><i class="fab fa-instagram"></i></a>` : ''}
        ${socialMedia.twitter ? `<a href="${socialMedia.twitter}"><i class="fab fa-twitter"></i></a>` : ''}
        ${socialMedia.facebook ? `<a href="${socialMedia.facebook}"><i class="fab fa-facebook-f"></i></a>` : ''}
        ${socialMedia.linkedin ? `<a href="${socialMedia.linkedin}"><i class="fab fa-linkedin-in"></i></a>` : ''}
        ${socialMedia.youtube ? `<a href="${socialMedia.youtube}"><i class="fab fa-youtube"></i></a>` : ''}
    `;
}

function loadFooterSection() {
    // Set footer description
    document.getElementById('footer-desc').textContent = CONFIG.ORGANIZATION.DESCRIPTION;

    // Load footer social links
    const footerSocialLinks = document.getElementById('footer-social-links');
    const socialMedia = CONFIG.CONTACT.SOCIAL_MEDIA;

    footerSocialLinks.innerHTML = `
        ${socialMedia.instagram ? `<a href="${socialMedia.instagram}"><i class="fab fa-instagram"></i></a>` : ''}
        ${socialMedia.twitter ? `<a href="${socialMedia.twitter}"><i class="fab fa-twitter"></i></a>` : ''}
        ${socialMedia.facebook ? `<a href="${socialMedia.facebook}"><i class="fab fa-facebook-f"></i></a>` : ''}
        ${socialMedia.linkedin ? `<a href="${socialMedia.linkedin}"><i class="fab fa-linkedin-in"></i></a>` : ''}
    `;
}

function setupEventListeners() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const sidebarClose = document.getElementById('sidebarClose');

    mobileMenu.addEventListener('click', function() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    sidebarClose.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close sidebar when clicking on a link
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Show success message
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;

        button.innerHTML = '<i class="fas fa-check"></i> Pesan Terkirim!';
        button.style.background = 'var(--success)';

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            this.reset();
        }, 3000);
    });

    // Slider functionality
    const slides = document.querySelector('.kegiatan-slides');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator');

    let currentSlide = 0;
    const totalSlides = CONFIG.KEGIATAN.length;

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
        updateSlider();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    function updateSlider() {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update indicators
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Auto slide
    setInterval(() => {
        currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
        updateSlider();
    }, 5000);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupAnimations() {
    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
}

// Theme customization based on config
function applyTheme() {
    const root = document.documentElement;
    const theme = CONFIG.THEME;

    root.style.setProperty('--primary', theme.PRIMARY);
    root.style.setProperty('--primary-dark', theme.PRIMARY_DARK);
    root.style.setProperty('--secondary', theme.SECONDARY);
    root.style.setProperty('--accent', theme.ACCENT);
    root.style.setProperty('--dark', theme.DARK);
    root.style.setProperty('--light', theme.LIGHT);
}

// Apply theme when config is loaded
applyTheme();