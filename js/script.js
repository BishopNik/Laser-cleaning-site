/** @format */

const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
	const revealTargets = document.querySelectorAll(
		'.section, .quote-section, .stats-band, .cta-band',
	);
	document.body.classList.add('reveal-ready');
	revealTargets.forEach((element, index) => {
		element.classList.add('reveal-item');
		element.style.setProperty('--reveal-delay', `${(index % 3) * 45}ms`);
	});

	const revealObserver = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					return;
				}
				entry.target.classList.add('is-visible');
				revealObserver.unobserve(entry.target);
			});
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
	);

	revealTargets.forEach(element => revealObserver.observe(element));
}

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
	track?.scrollBy({ left: 300, behavior: 'smooth' });
});

document.querySelector('.prev')?.addEventListener('click', () => {
	track?.scrollBy({ left: -300, behavior: 'smooth' });
});

const projectsModal = document.querySelector('.projects-modal');
const galleryMainFrame = projectsModal?.querySelector('.gallery-main-frame');
const galleryMain = projectsModal?.querySelector('.gallery-main');
const galleryCaption = projectsModal?.querySelector('.gallery-caption');
const i18nMessage = key => window.siteI18n?.message(key) || key;

document.querySelector('[data-open-projects]')?.addEventListener('click', () => {
	projectsModal?.showModal();
});

projectsModal?.querySelector('.modal-close')?.addEventListener('click', () => {
	projectsModal.close();
});

projectsModal?.addEventListener('cancel', event => {
	event.preventDefault();
});

galleryMainFrame?.addEventListener('click', () => {
	const isZoomed = galleryMainFrame.classList.toggle('is-zoomed');
	galleryMainFrame.setAttribute('aria-pressed', String(isZoomed));
	galleryMainFrame.setAttribute(
		'aria-label',
		isZoomed ? i18nMessage('zoomOut') : i18nMessage('zoomIn'),
	);
});

projectsModal?.querySelectorAll('.gallery-thumb').forEach(thumb => {
	thumb.addEventListener('click', () => {
		if (!galleryMain || !galleryCaption) {
			return;
		}

		const src = thumb.dataset.full;
		const alt = thumb.dataset.alt;

		if (!src || !alt) {
			return;
		}

		galleryMain.src = src;
		galleryMain.alt = alt;
		galleryCaption.textContent = alt;
		galleryMainFrame?.classList.remove('is-zoomed');
		galleryMainFrame?.setAttribute('aria-pressed', 'false');
		galleryMainFrame?.setAttribute('aria-label', i18nMessage('zoomIn'));

		projectsModal.querySelectorAll('.gallery-thumb').forEach(item => {
			item.classList.toggle('active', item === thumb);
		});
	});
});

const countdown = document.querySelector('[data-countdown]');

function pad(value) {
	return String(value).padStart(2, '0');
}

if (countdown) {
	const day = 24 * 60 * 60 * 1000;
	const endDate = Date.now() + 2 * day + 12 * 60 * 60 * 1000 + 45 * 60 * 1000 + 30 * 1000;

	function updateCountdown() {
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
}

document.querySelector('.quote-form')?.addEventListener('submit', async event => {
	event.preventDefault();

	const form = event.currentTarget;
	const message = form.querySelector('.form-message');
	const submitButton = form.querySelector('button[type="submit"]');
	const isValid = form.checkValidity();

	if (!isValid) {
		if (message) {
			message.textContent = i18nMessage('invalid');
		}
		form.reportValidity();
		return;
	}

	const buttonLabel = submitButton?.textContent;
	if (submitButton) {
		submitButton.disabled = true;
		submitButton.textContent = i18nMessage('sending');
	}
	if (message) {
		message.textContent = '';
	}

	try {
		const payload = Object.fromEntries(new FormData(form));
		payload.language = window.siteI18n?.language || 'pl';
		const apiOrigin = document.querySelector('meta[name="contact-api-origin"]')?.content.replace(/\/$/, '');
		if (!apiOrigin) throw new Error('Contact API origin is not configured');

		const response = await fetch(`${apiOrigin}/api/contact/laser-clean`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		if (!response.ok) {
			throw new Error('Telegram request failed');
		}

		if (message) {
			message.textContent = i18nMessage('success');
		}
		form.reset();
	} catch {
		if (message) {
			message.textContent = i18nMessage('error');
		}
	} finally {
		if (submitButton) {
			submitButton.disabled = false;
			submitButton.textContent = buttonLabel;
		}
	}
});
