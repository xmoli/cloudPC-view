import Vue from 'vue'
import router from './router'
import App from './App.vue'

process.env.MOCK && require('./mock/main')

Vue.config.productionTip = false

const sessionId = localStorage.getItem("server-admin-sessionId")
if (sessionId) {
  Vue.prototype.$isAuthenticated = true
  Vue.prototype.$sessionId = sessionId
} else {
  Vue.prototype.$isAuthenticated = false
}

router.beforeEach( (to, from, next) => {
  if (to.name !== 'Login' && !Vue.prototype.$isAuthenticated) next({ name: 'Login' })
  else {
    next()
  }
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
