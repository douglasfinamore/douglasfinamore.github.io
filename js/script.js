// ===== Mobile menu toggle =====
function initMenuToggle() {
    const toggle = document.getElementById('mobile-menu-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
        const sidenav = document.querySelector('.sidenav');
        if (sidenav) sidenav.classList.toggle('active');
    });
}

// ===== Highlight the page you're on =====
function markCurrentPage() {
    let here = window.location.pathname.split('/').pop();
    if (here === '') here = 'index.html';

    document.querySelectorAll('.sidebar-links a').forEach(function (link) {
        if (link.getAttribute('href') === here) {
            link.classList.add('is-current');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// ===== Load the shared sidebar =====
function loadHTMLContent(url, elementId) {
    const placeholder = document.getElementById(elementId);
    if (!placeholder) return;

    placeholder.innerHTML = '<div class="loading">Loading...</div>';

    fetch(url)
        .then(function (response) {
            if (!response.ok) throw new Error('Network error');
            return response.text();
        })
        .then(function (html) {
            placeholder.innerHTML = html;
            markCurrentPage();
        })
        .catch(function (error) {
            placeholder.innerHTML = '<p class="error">Failed to load navigation</p>';
            console.error('Error:', error);
        });
}

// ===== E-mail de-obfuscation =====
function initEmails() {
    document.querySelectorAll('.email').forEach(function (el) {
        el.textContent = el.dataset.user + '@' + el.dataset.domain;
    });
}

// ===== Start =====
document.addEventListener('DOMContentLoaded', function () {
    initMenuToggle();
    initEmails();
    loadHTMLContent('sidebar.html', 'sidebar-placeholder');
});