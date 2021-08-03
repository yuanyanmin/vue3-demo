import { createRouter, createWebHistory } from "vue-router";

// 开启history模式
const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/index',
            component: () => import('../views/index.vue')
        },
        {
            path: '/login',
            component: () => import('../views/Login.vue')
        }
    ]
})

export default router