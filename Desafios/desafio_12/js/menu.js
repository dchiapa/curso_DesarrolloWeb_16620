const hamburguerIcon = document.querySelector('#hamburguer');
const menu = document.querySelector('nav');

hamburguerIcon.addEventListener('click', () => {
	console.log('menu');
	menu.classList.toggle('active');
});
