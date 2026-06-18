/** @format */

const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

document.querySelectorAll('a[href^="#"]').forEach(link => {
	link.addEventListener('click', event => {
		const id = link.getAttribute('href');
		const target = id && id !== '#' ? document.querySelector(id) : null;

		if (!target) {
			return;
		}

		event.preventDefault();
		const offset = header ? header.offsetHeight : 0;
		const top = target.getBoundingClientRect().top + window.scrollY - offset + 1;

		window.scrollTo({ top, behavior: 'smooth' });
		nav?.classList.remove('open');
		menuBtn?.setAttribute('aria-expanded', 'false');
	});
});

menuBtn?.addEventListener('click', () => {
	const isOpen = nav?.classList.toggle('open');
	menuBtn.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

document.querySelectorAll('.faq-item').forEach(item => {
	const answer = item.querySelector('.faq-answer');

	if (item.classList.contains('active') && answer) {
		answer.style.maxHeight = `${answer.scrollHeight}px`;
	}

	item.querySelector('.faq-question')?.addEventListener('click', () => {
		const isActive = item.classList.toggle('active');

		if (answer) {
			answer.style.maxHeight = isActive ? `${answer.scrollHeight}px` : null;
		}
	});
});

const track = document.querySelector('.projects-track');

document.querySelector('.next')?.addEventListener('click', () => {
	track?.scrollBy({ left: 280, behavior: 'smooth' });
});

document.querySelector('.prev')?.addEventListener('click', () => {
	track?.scrollBy({ left: -280, behavior: 'smooth' });
});

const countdown = document.querySelector('[data-countdown]');
const day = 24 * 60 * 60 * 1000;
const endDate = Date.now() + 2 * day + 12 * 60 * 60 * 1000 + 45 * 60 * 1000 + 30 * 1000;

function pad(value) {
	return String(value).padStart(2, '0');
}

function updateCountdown() {
	if (!countdown) {
		return;
	}

	const remaining = Math.max(0, endDate - Date.now());
	const days = Math.floor(remaining / day);
	const hours = Math.floor((remaining % day) / (60 * 60 * 1000));
	const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
	const seconds = Math.floor((remaining % (60 * 1000)) / 1000);

	countdown.querySelector('[data-days]').textContent = pad(days);
	countdown.querySelector('[data-hours]').textContent = pad(hours);
	countdown.querySelector('[data-minutes]').textContent = pad(minutes);
	countdown.querySelector('[data-seconds]').textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelector('.quote-form')?.addEventListener('submit', event => {
	event.preventDefault();

	const form = event.currentTarget;
	const message = form.querySelector('.form-message');
	const isValid = form.checkValidity();

	if (!isValid) {
		message.textContent = 'Uzupełnij wymagane pola, a przygotujemy wycenę.';
		form.reportValidity();
		return;
	}

	message.textContent = 'Dziękujemy. Zapytanie jest gotowe do wysłania.';
	form.reset();
});
