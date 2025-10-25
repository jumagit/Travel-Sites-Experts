<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark transition-all"
      :class="{ 'navbar-scrolled': isScrolled }">
      <LoadingSpinner :show="isLoading" />

      <div class="container">
        <router-link to="/" class="navbar-brand fw-bold d-flex align-items-center">
          <img src="/src/assets/images/logo.png" style="width: 180px;" alt="Logo" class="img-fluid" />
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto text-uppercase fw-semibold">
            <li class="nav-item" v-for="link in navLinks" :key="link.path">
              <router-link :to="link.path" class="nav-link px-3" active-class="active-link">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main class="flex-grow-1 mt-5 pt-5">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer  py-4 mt-auto">
      <div class="container">
        <div class="row align-items-center gy-3">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0">
              © {{ new Date().getFullYear() }} TravelSitesExperts —
              <span class="text-orange">Crafted with Passion</span>
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <a v-for="icon in socialIcons" :key="icon.icon" href="#" class="text-dark text-decoration-none me-3">
              <i :class="`fab fa-${icon.icon} fa-lg`"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

const isLoading = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const socialIcons = [
  { icon: 'facebook' },
  { icon: 'twitter' },
  { icon: 'linkedin' },
  { icon: 'instagram' },
]

const show = () => (isLoading.value = true)
const hide = () => (isLoading.value = false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('api-request-start', show)
  window.addEventListener('api-request-end', hide)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('api-request-start', show)
  window.removeEventListener('api-request-end', hide)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ==============================
   BRAND COLORS
============================== */
:root {
  --forestgreen: forestgreen;
  --crimson: crimson;
  --orange: orange;
}

/* ==============================
   NAVBAR
============================== */
.navbar {
  background: transparent;
  transition: background 0.4s ease, box-shadow 0.4s ease;
}

.navbar-scrolled {
  background: var(--forestgreen) !important;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.navbar-brand img {
  transition: transform 0.3s ease;
}

.navbar-brand img:hover {
  transform: scale(1.05);
}

.nav-link {
  color: var(--orange) !important;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--crimson) !important;
}

.active-link {
  color: var(--crimson) !important;
  border-bottom: 2px solid var(--orange);
}

/* ==============================
   FOOTER
============================== */
.footer {
  background: linear-gradient(135deg, var(--forestgreen), var(--crimson));
  font-size: 0.95rem;
}

.footer i {
  transition: all 0.3s ease;
}

.footer i:hover {
  color: var(--orange);
  transform: scale(1.2);
}

/* ==============================
   LAYOUT & ANIMATION
============================== */
main {
  background-color: #fafafa;
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Utility Text Colors */
.text-orange {
  color: var(--orange);
}
</style>
