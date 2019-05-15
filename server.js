// Use express https://ssr.vuejs.org/guide/#integrating-with-a-server
// Using page template https://ssr.vuejs.org/guide/#using-a-page-template
const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('index.template.html', 'utf-8')
})


server.post('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })

  // The context object can also be shared with the Vue app instance, allowing components to dynamically register data for template interpolation. https://ssr.vuejs.org/guide/#using-a-page-template
  const context = {
    title: 'hello',
    meta: `
      <meta ...>
      <meta ...>
    `
  }

  renderer.renderToString(app, context, (err, html) => {
    console.log(html) // will be the full page with app content injected.

    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }

    res.end(html);
  })
})

server.listen(3000)