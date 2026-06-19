# Laser Clean site

Static landing page with a small Node.js server for Telegram form delivery.

## Run locally

```bash
npm start
```

Open `http://127.0.0.1:3000/`.

Use this server for testing the form. VS Code Live Server on port `5500` can show the page, but it does not provide `/api/quote`.

## Telegram setup

Create `.env` from `.env.example` and set:

```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_numeric_chat_id
```

Telegram bots cannot send a private message to `@NikanorovAn` or `+380676721852` until that person starts the bot. Ask `@NikanorovAn` to send `/start` to the bot, then run:

```bash
npm run telegram:chat-id
```

Copy the numeric id shown for `@NikanorovAn` into `TELEGRAM_CHAT_ID`.
