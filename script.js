// EDITABLE CONFIG
const APK_DOWNLOAD_URL = 'SPR TOURNAMENT.apk';
const APP_VERSION = '1.0.2';

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active');
    }
    return false;
}

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        faqItems.forEach(i => i.classList.remove('active'));
        
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Download buttons
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function handleDownload(e) {
    e.preventDefault();
    showToast();
    setTimeout(() => {
        window.location.href = APK_DOWNLOAD_URL;
    }, 500);
}

document.getElementById('heroDownloadBtn').addEventListener('click', handleDownload);
document.getElementById('navDownloadBtn').addEventListener('click', handleDownload);

// Set version and year
document.getElementById('versionText').textContent = `Version ${APP_VERSION}`;
document.getElementById('currentYear').textContent = new Date().getFullYear();