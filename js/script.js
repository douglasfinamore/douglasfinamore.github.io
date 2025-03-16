// Toggle Sidebar on Mobile
document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
    const sidenav = document.querySelector('.sidenav');
    sidenav.classList.toggle('active');
});

// Load Sidebar Content
function loadHTMLContent(url, elementId) {
    const placeholder = document.getElementById(elementId);
    placeholder.innerHTML = '<div class="loading">Loading...</div>';

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network error');
            return response.text();
        })
        .then(html => {
            placeholder.innerHTML = html;
        })
        .catch(error => {
            placeholder.innerHTML = `<p class="error">Failed to load content</p>`;
            console.error('Error:', error);
        });
}

// Load Sidebar on DOMContentLoaded to ensure it loads before content
document.addEventListener('DOMContentLoaded', function () {
    loadHTMLContent('sidebar.html', 'sidebar-placeholder');
});

// Email Obfuscation
document.querySelectorAll('.email').forEach(el => {
    el.innerHTML = `${el.dataset.user}@${el.dataset.domain}`;
});
