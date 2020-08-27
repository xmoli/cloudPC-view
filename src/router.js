import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/', redirect: '/file',
        name: 'Home'
    },
    {
        path: '/file', component: () => import('./pages/File.vue'),
        name: 'File',cname:"文件", icon:"fa-file-o"
    },
    {
        path: '/login', component: () => import('./pages/Login.vue'),
        name: 'Login'
    },
    {
        path: '/task', component: () => import('./pages/Task.vue'),
        name: 'Task', cname:"任务", icon:"fa-rocket"
    },
    {
        path: '/log', component: () => import('./pages/Log'),
        name: 'Log', cname: "日志", icon:"fa-inbox"
    },
    {
        path: '/user', component: () => import('./pages/User'),
        name: 'User', cname: "用户", icon:"fa-user-o"
    },
    {
        path: '/about', component:()=> import('./pages/About'),
        name: 'About', cname: "关于", icon:"fa-info"
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