import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import NotFound from '../views/NotFound.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/projects', component: ProjectsView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    // *** IMPORTANT ***  Catch‑all for 404
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // <-- history mode
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Restore scroll position on back/forward
        if (savedPosition) return savedPosition
        return { top: 0 }
    }
})
export default router