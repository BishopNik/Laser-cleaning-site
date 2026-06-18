/** @format */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(root, '.env');

if (fs.existsSync(envPath)) {
	for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#')) continue;
		const separator = trimmed.indexOf('=');
		if (separator < 1) continue;
		const key = trimmed.slice(0, separator).trim();
		const value = trimmed.slice(separator + 1).trim();
		if (!process.env[key]) process.env[key] = value;
	}
}

const port = Number(process.env.PORT || 3000);
const mimeTypes = {
	'.css': 'text/css; charset=utf-8',
	'.html': 'text/html; charset=utf-8',
	'.ico': 'image/x-icon',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.js': 'text/javascript; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.png': 'image/png',
	'.svg': 'image/svg+xml',
	'.webp': 'image/webp',
};

function sendJson(response, status, data) {
	response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
	response.end(JSON.stringify(data));
}

function escapeHtml(value) {
	return String(value)
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;');
}

async function readJson(request) {
	let body = '';
	for await (const chunk of request) {
		body += chunk;
		if (body.length > 64_000) throw new Error('Request body is too large');
	}
	return JSON.parse(body || '{}');
}

async function handleQuote(request, response) {
	const token = process.env.TELEGRAM_BOT_TOKEN;
	const chatId = process.env.TELEGRAM_CHAT_ID;

	if (!token || !chatId) {
		sendJson(response, 503, { error: 'Telegram is not configured' });
		return;
	}

	try {
		const payload = await readJson(request);
		const name = String(payload.name || '').trim().slice(0, 100);
		const phone = String(payload.phone || '').trim().slice(0, 40);
		const email = String(payload.email || '').trim().slice(0, 160);
		const message = String(payload.message || '').trim().slice(0, 2000);
		const language = String(payload.language || 'pl').trim().slice(0, 5);

		if (name.length < 2 || phone.length < 5 || !email.includes('@') || message.length < 3) {
			sendJson(response, 400, { error: 'Invalid form data' });
			return;
		}

		const telegramText = [
			'<b>Nowe zapytanie z Laser Clean</b>',
			'',
			'<b>Imię:</b> ' + escapeHtml(name),
			'<b>Telefon:</b> ' + escapeHtml(phone),
			'<b>E-mail:</b> ' + escapeHtml(email),
			'<b>Język:</b> ' + escapeHtml(language.toUpperCase()),
			'',
			'<b>Opis:</b>',
			escapeHtml(message),
		].join('\n');

		const telegramResponse = await fetch(
			'https://api.telegram.org/bot' + token + '/sendMessage',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: chatId,
					text: telegramText,
					parse_mode: 'HTML',
				}),
			},
		);

		if (!telegramResponse.ok) {
			throw new Error('Telegram API rejected the message');
		}

		sendJson(response, 200, { ok: true });
	} catch (error) {
		console.error(error.message);
		sendJson(response, 500, { error: 'Unable to send the message' });
	}
}

function serveStatic(request, response) {
	const url = new URL(request.url, 'http://localhost');
	const requestedPath = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
	const filePath = path.resolve(root, '.' + requestedPath);

	if (!filePath.startsWith(root + path.sep)) {
		response.writeHead(403);
		response.end('Forbidden');
		return;
	}

	fs.stat(filePath, (statError, stats) => {
		if (statError || !stats.isFile()) {
			response.writeHead(404);
			response.end('Not found');
			return;
		}

		response.writeHead(200, {
			'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
			'Cache-Control': 'no-cache',
		});
		if (request.method === 'HEAD') {
			response.end();
			return;
		}
		fs.createReadStream(filePath).pipe(response);
	});
}

const server = http.createServer(async (request, response) => {
	if (request.method === 'POST' && request.url === '/api/quote') {
		await handleQuote(request, response);
		return;
	}

	if (request.method === 'GET' || request.method === 'HEAD') {
		serveStatic(request, response);
		return;
	}

	response.writeHead(405, { Allow: 'GET, HEAD, POST' });
	response.end('Method not allowed');
});

server.listen(port, '127.0.0.1', () => {
	console.log('Laser Clean: http://127.0.0.1:' + port);
});
