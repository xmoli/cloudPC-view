import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

function getSessionId () {
  const sessionId = sessionStorage.getItem("server-admin-sessionId")
  if (sessionId) {
    return true
  } else {
    const id = localStorage.getItem("server-admin-sessionId")
    if (id) {
      return true
    }
    return false
  }
}

router.beforeEach( (to, from, next) => {
  if (to.name !== 'Login' && !getSessionId()) {
    next({ name: 'Login' })
  }
  else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
