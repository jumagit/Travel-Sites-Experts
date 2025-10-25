import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './api/axios'  // ← ADD THIS LINE
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/base.css';
import 'bootstrap'

// Global state for spinner
const app = createApp(App)
app.config.globalProperties.$http = api

let requestCount = 0
const showSpinner = () => {
    if (requestCount === 0) {
        document.body.classList.add('loading')
    }
    requestCount++
}
const hideSpinner = () => {
    requestCount--
    if (requestCount === 0) {
        document.body.classList.remove('loading')
    }
}

window.addEventListener('api-request-start', showSpinner)
window.addEventListener('api-request-end', hideSpinner)

createApp(App).use(router).mount('#app')