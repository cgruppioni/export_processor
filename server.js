// Use express https://ssr.vuejs.org/guide/#integrating-with-a-server
// Using page template https://ssr.vuejs.org/guide/#using-a-page-template
const server = require('express')()
const createApp = require('./app')
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('index.template.html', 'utf-8')
})


server.post('*', (req, res) => {
  const context = {
    url: "neopoets.com",
    title: 'hello',
    meta: `
      <meta ...>
      <meta ...>
    `
  }
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