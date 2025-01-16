# Unhandled Promise Rejection in Node.js
This repository demonstrates a common error in Node.js: unhandled promise rejections.  The `server.js` file contains code that lacks proper error handling for promises, leading to an unhandled rejection.  The `serverSolution.js` file shows how to correctly handle this situation.

## Problem
The original code creates an HTTP server. However, if any asynchronous operation within the server's request handling logic fails, the resulting promise rejection is not caught, causing the Node.js process to exit unexpectedly. This makes the application unstable and difficult to debug.

## Solution
The solution involves adding `.catch()` to handle potential errors gracefully.  This prevents the application from crashing and allows for better error management.

## How to Run
1. Clone the repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node server.js` (original code) or `node serverSolution.js` (corrected code).