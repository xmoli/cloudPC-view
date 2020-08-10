import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', redirect: '/file',
        name: 'Home'
    },
    {
        path: '/file', component: () => import('./pages/File.vue'),
        name: 'File'
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
        path: '/log', component: () => import('./pages/Log'),
        name: 'Log'
    },
    {
        path: '/setting', component: () => import('./pages/User'),
        name: 'Setting'
    },
    {
        path: '/about', component:()=> import('./pages/About'),
        name: 'About'
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