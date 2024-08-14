window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ff0066'; /* Change navbar background color when scrolled */
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});
