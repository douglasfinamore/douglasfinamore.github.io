// ===== Mobile menu toggle =====
function initMenuToggle() {
    const toggle = document.getElementById('mobile-menu-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
        const sidenav = document.querySelector('.sidenav');
        if (sidenav) sidenav.classList.toggle('active');
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
});
