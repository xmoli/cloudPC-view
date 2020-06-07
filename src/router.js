import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/Login.vue'
import Task from './pages/Task.vue'
import Logs from './pages/Logs.vue'
import Page404 from './pages/Page404.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', redirect: '/task'
    },
    {
        path: '/login', component: Login
    },
    {
        path: '/task', component: Task
    },
    {
        path: '/logs', component: Logs
    },
    {
        path: '*', component: Page404
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})