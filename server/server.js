import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../src/App'

const PORT = process.env.PORT || 8000

const app = express()

app.use('/static', express.static(path.resolve(__dirname, '..', 'build/static')))
app.use('^/$', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).send('Unexpected error')
    }
    const context = {}
    const appHtml = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`))
  })
})
app.use(express.static(path.resolve(__dirname, '..', 'build')))



app.use('*', (req, res, next) => {
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
  console.log(process.env.PORT);
})