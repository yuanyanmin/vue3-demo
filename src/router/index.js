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
            path: '/home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/login',
            component: () => import('../views/Login.vue')
        }
    ]
})

export default router