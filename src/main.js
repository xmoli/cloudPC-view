import Vue from 'vue'
import router from './router'
import App from './App.vue'
import getToken from './util/getToken'

Vue.config.productionTip = false

let token = getToken()

router.beforeEach( (to, from, next) => {
  if (to.name !== 'Login' && !token) {
    next({ name: 'Login' })
  }
  else if (to.name === 'Login' && token){
    next({ name: 'Home'})
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
