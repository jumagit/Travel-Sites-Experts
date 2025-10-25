<template>
    <!-- HERO SECTION -->
    <section class="hero-section d-flex align-items-center text-white text-center">
        <div class="overlay"></div>
        <div class="container position-relative z-2">
            <h1 class="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">
                Our Portfolio
            </h1>
            <p class="lead mb-0 animate__animated animate__fadeInUp">
                Explore some of the recent projects we've delivered for our clients.
            </p>
        </div>
    </section>

    <!-- PROJECTS LIST -->
    <section class="py-5 bg-light">
        <div class="container">
            <!-- Loading Spinner -->
            <div v-if="loading" class="text-center py-5">
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

            <!-- Projects Grid -->
            <div v-else-if="projects.length" class="row g-4">
                <div v-for="p in projects" :key="p.id" class="col-sm-6 col-lg-4">
                    <div class="card h-100 project-card shadow-sm border-0">
                        <div class="card-img-wrapper">
                            <img :src="getImageUrl(p.image_url)" :alt="p.title" class="card-img-top"
                                @error="handleImageError" />
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="fw-bold text-forest mb-2">{{ p.title }}</h5>
                            <p class="text-muted small flex-grow-1">
                                {{ truncate(p.description, 120) }}
                            </p>
                            <p class="small text-secondary mb-3">
                                Client: <strong>{{ p.client_name || 'Private Client' }}</strong>
                            </p>
                            <div class="mt-auto">
                                <a v-if="p.website_link" :href="formatLink(p.website_link)" target="_blank"
                                    rel="noopener" class="btn btn-sm btn-outline-forest w-100">
                                    Visit Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-5">
                <p class="text-muted mb-0">No projects available at the moment.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api/axios'

const API_BASE = 'https://api.travelsitesexperts.com'
const projects = ref([])
const loading = ref(true)

function truncate(text, limit) {
    if (!text) return ''
    return text.length > limit ? text.substring(0, limit) + '...' : text
}

function formatLink(url) {
    if (!url) return '#'
    return /^https?:\/\//i.test(url) ? url : `https://${url}`
}

function getImageUrl(path) {
    if (!path) return '/src/assets/images/placeholder.jpg'
    return path.startsWith('http') ? path : `${API_BASE}${path}`
}

function handleImageError(e) {
    e.target.src = '/src/assets/images/placeholder.jpg'
}

onMounted(async () => {
    try {
        const res = await api.get('/projects-api')
        projects.value = res.data.data || res.data
    } catch (err) {
        console.error('Failed to load projects:', err)
    } finally {
        loading.value = false
    }
})
</script>

<style scoped>
/* HERO SECTION */
.hero-section {
    position: relative;
    min-height: 55vh;
    background: url('@/assets/images/contact-us.png') center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-section .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

/* COLORS */
.text-forest {
    color: forestgreen;
}

/* PROJECT CARD */
.card-img-wrapper {
    height: 220px;
    overflow: hidden;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}

.card-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover img {
    transform: scale(1.05);
}

.project-card {
    transition: all 0.3s ease-in-out;
    border-top: 4px solid transparent;
    border-radius: 0.5rem;
}

.project-card:hover {
    transform: translateY(-6px);
    border-top-color: crimson;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* BUTTON */
.btn-outline-forest {
    color: forestgreen;
    border: 1px solid forestgreen;
    transition: all 0.3s ease;
}

.btn-outline-forest:hover {
    background-color: forestgreen;
    color: white;
    border-color: forestgreen;
}

/* LOADING SPINNER */
.spinner-border.text-success {
    color: forestgreen !important;
}

/* RESPONSIVE TEXT */
@media (max-width: 576px) {
    .hero-section h1 {
        font-size: 2rem;
    }

    .hero-section p {
        font-size: 1rem;
    }
}
</style>
