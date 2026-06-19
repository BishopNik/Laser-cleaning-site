/** @format */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
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

const token = process.env.TELEGRAM_BOT_TOKEN;
const expectedUsername = (process.env.TELEGRAM_RECIPIENT_USERNAME || 'NikanorovAn')
	.replace(/^@/, '')
	.toLowerCase();

if (!token || token.includes('replace_with')) {
	console.error('Set TELEGRAM_BOT_TOKEN in .env first.');
	process.exit(1);
}

const response = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
const data = await response.json();

if (!response.ok || !data.ok) {
	console.error(data.description || 'Unable to read Telegram updates.');
	process.exit(1);
}

const chats = new Map();

for (const update of data.result || []) {
	const message = update.message || update.edited_message || update.channel_post;
	const chat = message?.chat;
	const from = message?.from;

	if (!chat) continue;

	chats.set(chat.id, {
		id: chat.id,
		type: chat.type,
		title: chat.title || [chat.first_name, chat.last_name].filter(Boolean).join(' '),
		username: chat.username || from?.username || '',
		isExpected:
			chat.username?.toLowerCase() === expectedUsername ||
			from?.username?.toLowerCase() === expectedUsername,
	});
}

if (!chats.size) {
	console.log('No chats found yet. Ask @' + expectedUsername + ' to send /start to the bot.');
	process.exit(0);
}

console.log('Available Telegram chats:');
for (const chat of chats.values()) {
	const marker = chat.isExpected ? ' <- @' + expectedUsername : '';
	const username = chat.username ? ' @' + chat.username : '';
	const title = chat.title ? ' ' + chat.title : '';
	console.log(`${chat.id} [${chat.type}]${username}${title}${marker}`);
}

console.log('');
console.log('Put the numeric id for @' + expectedUsername + ' into TELEGRAM_CHAT_ID in .env.');
