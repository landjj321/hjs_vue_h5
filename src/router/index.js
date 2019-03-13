import Vue from 'vue'
import Router from 'vue-router'
import page1 from '../examples/page1.vue'
import page2 from '../examples/page2.vue'
import page3 from '../examples/page3.vue'
import page4 from '../examples/page4.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/page1', name: 'page1', component: page1 },
    { path: '/page2', name: 'page2', component: page2 },
    { path: '/page3', name: 'page3', component: page3 },
    { path: '/page4', name: 'page4', component: page4 },
    // eslint-disable-next-line standard/object-curly-even-spacing
    { path: '/', redirect: '/page1'}
  ]
})
