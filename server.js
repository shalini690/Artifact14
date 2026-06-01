/**
 * server.js — Minimal Express.js application entry point for Artifact14.
 *
 * This file stands up a tiny HTTP server using the Express framework and
 * exposes exactly two GET endpoints:
 *   - GET /              -> responds with the plain text "Hello world"
 *   - GET /good-evening  -> responds with the plain text "Good evening"
 *
 * The server listens on the port given by the PORT environment variable,
 * defaulting to 3000 when PORT is not set. It is started with `npm start`
 * (which runs `node server.js`) as declared in package.json.
 *
 * Responses are emitted as plain-text strings via res.send(string); no custom
 * headers, JSON bodies, view templates, or explicit status codes are used —
 * Express applies its sensible defaults (HTTP 200, text/html; charset=utf-8).
 */

'use strict';

// Import the Express framework (declared as a dependency in package.json).
const express = require('express');

// Create the Express application instance that registers routes and handles requests.
const app = express();

// GET /  -> responds with the exact text "Hello world".
app.get('/', (req, res) => {
  res.send('Hello world');
});

// GET /good-evening  -> responds with the exact text "Good evening".
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Default port is 3000; override it by setting the PORT environment variable
// (for example: `PORT=8080 npm start`).
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
