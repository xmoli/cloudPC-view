import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', redirect: '/task',
        name: 'Home'
    },
    {
        path: '/login', component: () => import('./pages/Login.vue'),
        name: 'Login'
    },
    {
        path: '/task', component: () => import('./pages/Task.vue'),
        name: 'Task'
    },
    {
        path: '/logs', component: () => import('./pages/Logs.vue'),
        name: 'Logs'
    },
    {
        path: '/user', component: () => import('./pages/User'),
        name: 'User'
    },
    {
        path: '*', component: () => import('./pages/Page404.vue'),
        name: 'Page404'
    }
]

export default new VueRouter({
/*     mode: 'history', */
    routes
})