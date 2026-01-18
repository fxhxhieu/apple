// CUON LEN DAAU TRANNG

const cuondau = document.getElementById('cuondau');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        cuondau.style.display = 'block';
    } else {
        cuondau.style.display = 'none';
    }
});

cuondau.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

