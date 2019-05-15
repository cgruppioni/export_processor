// Use express https://ssr.vuejs.org/guide/#integrating-with-a-server
const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

// const renderer = createRenderer({
//   template: require('fs').readFileSync('./index.template.html', 'utf-8')
// })

// renderer.renderToString(app, (err, html) => {
//   console.log(html) // will be the full page with app content injected.
// })


server.post('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })

  renderer.renderToString(app, (err, html) => {
    console.log("HERE");
    if (err) {
      console.log("ERROR");
      res.status(500).end('Internal Server Error')
      return
    }
    console.log("ALSO HERE");
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(3000)