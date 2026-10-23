# Convertify — All-in-One Converter

A responsive glassmorphism converter web app built with React + Vite and an Express API.

## Features

- **Table converter:** CSV, TSV, JSON, HTML tables, Markdown tables, XLSX/XLS input; export JSON, CSV, TSV, Markdown, HTML, SQL. Includes preview, drag/drop upload, copy and download.
- **Image converter:** PNG, JPEG, WebP via the browser Canvas API with quality control.
- **Unit converter:** length, weight, temperature and data units.
- **Currency converter:** loads indicative rates through the Express API from a public exchange-rate service.
- **Developer tools:** JSON formatting, Base64 and URL encode/decode.
- **Text tools:** upper/lower/title case, whitespace cleanup, one item per line and reverse lines.
- Glassmorphism responsive UI, mobile navigation, error messages and local file processing.

## Requirements

- Node.js 20 or newer recommended
- npm
- Internet connection for first dependency install and currency rates

## Install and run

```bash
npm install
npm run dev
```

Open **http://localhost:5173**. The Express API runs at **http://localhost:8787**.

## Production build

```bash
npm run build
npm start
```

`npm start` runs the API only. To serve the built frontend in production, deploy `dist/` as a static site and deploy `server/` as a Node service, or configure a static host and the API URL appropriately. For a simple local preview after building, use `npm run client -- --host 0.0.0.0`.

## Project structure

```text
convertify/
├── index.html
├── package.json
├── vite.config.js
├── server/
│   └── index.js
└── src/
    ├── main.jsx
    ├── App.jsx
    └── styles.css
```

## Notes / limitations

- The table converter loads the first worksheet from Excel files. The XLSX parser is bundled in the client.
- Image conversion depends on browser-supported Canvas formats. Animated images are converted as a single frame; SVG may not work consistently in all browsers.
- Files are processed locally in the browser except currency-rate requests. No account, database or upload service is configured in this starter.
- Currency rates are indicative, can be delayed, and should not be used as a guaranteed transaction quote.
- For production, add tests, upload/file size validation, rate limiting, API monitoring, accessibility checks, and a clear privacy policy.
# convertify
