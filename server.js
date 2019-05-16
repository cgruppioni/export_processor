// Use express https://ssr.vuejs.org/guide/#integrating-with-a-server
// Using page template https://ssr.vuejs.org/guide/#using-a-page-template
// const Vue = require('vue')
const server = require('express')()
const createApp = require('./app')
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})
// const renderer = require('vue-server-renderer').createRenderer()


server.post('*', (req, res) => {
  const context = { url: "neopets.com" }
  const app = createApp(context)

  renderer.renderToString(app, context, (err, html) => {
    console.log(html) // will be the full page with app content injected.

    if (err) {
      res.status(500).end(err);
      return
    }

    res.end(html);
  })
})

server.listen(3000)