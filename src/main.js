import Vue from 'vue'
import router from './router'
import App from './App.vue'
import getToken from './getToken'

Vue.config.productionTip = false

let getSessionId = getToken

router.beforeEach( (to, from, next) => {
  if (to.name !== 'Login' && !getSessionId()) {
    next({ name: 'Login' })
  }
  else if (to.name === 'Login' ){
    next({ name: 'Home'})
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
