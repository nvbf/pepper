const express = require('express');
const next = require('next');
const pathMatch = require('path-match');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

app.prepare().then(() => {
  const server = express();

  // Server-side
  const route = pathMatch();

  server.get('/match/:id', (req, res) => {
    const params = route('/match/:id')(parse(req.url).pathname);
    return app.render(req, res, '/index', params);
  });

  server.get('/admin/match/:id', (req, res) => {
    const params = route('/admin/match/:id')(parse(req.url).pathname);
    return app.render(req, res, '/admin', params);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  /* eslint-disable no-console */
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
});
