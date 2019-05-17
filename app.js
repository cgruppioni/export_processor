// https://ssr.vuejs.org/guide/structure.html#avoid-stateful-singletons

const Vue = require('vue')

module.exports = function createApp (context) {
  // Maybe need to do this here to render h => h(app)
  // https://ssr.vuejs.org/guide/structure.html#code-structure-with-webpack

  return new Vue({
    data: {
      url: context.url,
      title: context.title,
      meta: context.meta
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })


  // The same rule applies to router, store and event bus instances as well. Instead of exporting it directly from a module and importing it across your app, you need to create a fresh instance in createApp and inject it from the root Vue instance.
}