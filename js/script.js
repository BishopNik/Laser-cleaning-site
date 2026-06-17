/** @format */

document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault();

	document.getElementById('msg').textContent = 'Спасибо! Мы скоро свяжемся с вами.';
});

document.querySelectorAll('.faq-item').forEach(item => {
	item.querySelector('.faq-question').addEventListener('click', () => {
		item.classList.toggle('active');
	});
});
