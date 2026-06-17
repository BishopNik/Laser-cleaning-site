/** @format */

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	});
});

// FAQ accordion (вопрос-ответ)
document.querySelectorAll('.faq-item').forEach(item => {
	const question = item.querySelector('.faq-question');

	question.addEventListener('click', () => {
		item.classList.toggle('active');

		const answer = item.querySelector('.faq-answer');
		if (item.classList.contains('active')) {
			answer.style.maxHeight = answer.scrollHeight + 'px';
		} else {
			answer.style.maxHeight = null;
		}
	});
});

// Simple mobile menu toggle (если есть бургер меню)
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
	menuBtn.addEventListener('click', () => {
		nav.classList.toggle('open');
		menuBtn.classList.toggle('open');
	});
}
