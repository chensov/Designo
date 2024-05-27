import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/web-design',
        name: 'web-design',
        component: () => import('../views/WebDesignView.vue')
    },
    {
        path: '/app-design',
        name: 'app-design',
        component: () => import('../views/AppDesignView.vue')
    },
    {
        path: '/graphic-design',
        name: 'graphic-design',
        component: () => import('../views/GraphicDesignView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/locations',
        name: 'locations',
        component: () => import('../views/LocationsView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to,from,savedPosition) {
        if(savedPosition){
            return savedPosition
        } else {
            return { top:0 }
        }
    }
})
