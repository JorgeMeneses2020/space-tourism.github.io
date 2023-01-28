const hamb = document.querySelector('#hamburguesa');
const close = document.querySelector('#close');
const menu = document.querySelector('#menu');




hamb.addEventListener('click', () => {
    hamb.style.display = 'none';
    close.style.display = 'block';
    menu.style.display = 'block';
});

close.addEventListener('click', () => {
    hamb.style.display = 'block';
    close.style.display = 'none';
    menu.style.display = 'none';
});