// https://ssr.vuejs.org/guide/structure.html#avoid-stateful-singletons

const Vue = require('vue')

module.exports = function createApp (context) {
  return new Vue({
    data: {
      url: context.url,
      title: context.title,
      meta: context.meta
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })
}