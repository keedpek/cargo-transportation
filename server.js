import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server'; 
import App from './src/App'; 

const app = express();

// Путь к статичным файлам (например, build директория)
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
  const context = {};
  const appMarkup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  // Генерация HTML страницы
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>SSR React App</title>
        <link rel="stylesheet" href="/main.css">
      </head>
      <body>
        <div id="root">${appMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
