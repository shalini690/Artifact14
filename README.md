# Artifact14

A minimal Node.js HTTP server built on the [Express.js](https://expressjs.com/) web framework. It exposes two endpoints that each return a plain-text greeting: `Hello world` and `Good evening`.

## Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.
- npm (bundled with Node.js), used to install the project's dependencies.

## Installation

Install the project dependencies:

```bash
npm install
```

This installs the `express` dependency declared in `package.json`.

## Running the server

Start the server:

```bash
npm start
```

This runs `node server.js` (the `start` script defined in `package.json`). By default the server listens on `http://localhost:3000`. To use a different port, set the `PORT` environment variable before starting the server (the server reads `process.env.PORT || 3000`).

## Endpoints

| Method | Path | Response Body | Status |
|--------|------|---------------|--------|
| GET | `/` | `Hello world` | 200 |
| GET | `/good-evening` | `Good evening` | 200 |

With the server running, you can call each endpoint with `curl`:

```bash
curl http://localhost:3000/
curl http://localhost:3000/good-evening
```
