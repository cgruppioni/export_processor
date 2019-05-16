// https://ssr.vuejs.org/guide/structure.html#avoid-stateful-singletons

const Vue = require('vue')

module.exports = function createApp (context) {
  return new Vue({
    data: {
      url: context.url
    },
    template: require('fs').readFileSync('index.template.html', 'utf-8')
    // template: `<div>The visited URL is: {{ url }}</div>`
  })
}