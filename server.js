/**
 * server.js — Express application entry point.
 *
 * Minimal Node.js HTTP server built on the Express.js web framework. It exposes
 * two plain-text GET endpoints on a single server instance:
 *
 *   GET /              -> "Hello world"   (FR-2: baseline / backward-compatible endpoint)
 *   GET /good-evening  -> "Good evening"  (FR-3: new endpoint)
 *
 * The module follows the canonical Express idiom — application instantiation via
 * express(), route registration via app.get(), response emission via res.send(),
 * and a single HTTP listener via app.listen(). It is launched through `npm start`
 * (mapped to `node server.js`) and is declared as the package "main".
 *
 * Module system: CommonJS (require). package.json does not set "type": "module",
 * so CommonJS is the correct and intended module format for this file.
 */

'use strict';

// Import the Express web framework. Declared as a runtime dependency in
// package.json ("express": "^5.2.1") and resolved from node_modules/.
const express = require('express');

// Instantiate the Express application via the factory function.
const app = express();

// FR-2: preserve the baseline endpoint (backward compatibility).
// Responds to GET / with the exact plain-text body "Hello world" (HTTP 200).
app.get('/', (req, res) => res.send('Hello world'));

// FR-3: the new endpoint.
// Responds to GET /good-evening with the exact plain-text body "Good evening" (HTTP 200).
app.get('/good-evening', (req, res) => res.send('Good evening'));

// Bind the HTTP listener. The port defaults to 3000 but is overridable via the
// PORT environment variable, so the deployment environment can configure it
// without any code changes.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
