<template>
    <section class="contact-section text-white position-relative py-5">
        <!-- Overlay -->
        <div class="overlay"></div>

        <div class="container position-relative z-2">
            <!-- HEADER -->
            <div class="text-center mb-5">
                <h1 class="display-5 fw-bold animate__animated animate__fadeInDown text-white">
                    Get in Touch
                </h1>
                <p class="lead text-light opacity-75 mx-auto animate__animated animate__fadeInUp animate__delay-1s"
                    style="max-width: 700px;">
                    We'd love to hear from you! Fill in your details below and our team will respond shortly.
                </p>
            </div>

            <!-- CONTACT FORM -->
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <!-- Success Message -->
                    <transition name="fade">
                        <div v-if="success" class="alert alert-success text-center shadow-sm">
                            <i class="fas fa-check-circle me-2"></i>{{ success }}
                        </div>
                    </transition>

                    <!-- Error Message -->
                    <transition name="fade">
                        <div v-if="error" class="alert alert-danger text-center shadow-sm">
                            <i class="fas fa-exclamation-triangle me-2"></i>{{ error }}
                        </div>
                    </transition>

                    <form @submit.prevent="submit"
                        class="contact-form bg-white text-dark rounded-4 shadow-lg p-4 p-md-5">
                        <div class="row g-4">
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Full Name *</label>
                                <input v-model="form.name" type="text" class="form-control" required
                                    placeholder="Enter your full name" />
                            </div>

                            <!-- Honeypot -->
                            <div style="position: absolute; left: -9999px;">
                                <input v-model="form.website_url" type="text" name="website_url" autocomplete="off"
                                    tabindex="-1" />
                            </div>

                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Email *</label>
                                <input v-model="form.email" type="email" class="form-control" required
                                    placeholder="Enter your email address" />
                            </div>

                            <div class="col-12">
                                <label class="form-label fw-semibold">Phone (Optional)</label>
                                <input v-model="form.phone" type="tel" class="form-control"
                                    placeholder="Your phone number" />
                            </div>

                            <div class="col-12">
                                <label class="form-label fw-semibold">Message *</label>
                                <textarea v-model="form.message" rows="5" class="form-control" required
                                    placeholder="How can we help?"></textarea>
                            </div>

                            <div class="col-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg px-5 fw-semibold"
                                    :disabled="loading">
                                    <span v-if="loading"><i class="fas fa-spinner fa-spin"></i> Sending...</span>
                                    <span v-else><i class="fas fa-paper-plane me-1"></i> Send Message</span>
                                </button>
                            </div>
                        </div>
                    </form>

                    <!-- CONTACT INFO -->
                    <div class="text-center mt-5 text-light">
                        <p class="mb-1"><i class="fas fa-envelope me-2"></i> info@travelsitesexperts.com</p>
                        <p><i class="fas fa-phone me-2"></i> +256 702 499 649</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import api from '../api/axios'

const form = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
    website_url: ''
})

const loading = ref(false)
const success = ref('')
const error = ref('')

async function submit() {
    loading.value = true
    success.value = ''
    error.value = ''

    try {
        const res = await api.post('/contact', form.value)
        success.value = res.data.message || 'Message sent successfully!'
        form.value = { name: '', email: '', phone: '', message: '', website_url: '' }
    } catch (err) {
        if (err.response?.status === 422) {
            const errors = err.response.data.errors
            error.value = Object.values(errors).flat().join(' ')
        } else if (err.response?.status === 429) {
            error.value = err.response.data.message || 'Too many attempts. Try again later.'
        } else {
            error.value = err.response?.data?.message || 'Failed to send message. Please try again.'
        }
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
.contact-section {
    background: url('/src/assets/images/portifolio.jpg') center/cover no-repeat;
    position: relative;
    min-height: 100vh;
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 25, 60, 0.75);
    z-index: 1;
}

.z-2 {
    z-index: 2;
}

.contact-form {
    transition: all 0.3s ease;
}

.contact-form:hover {
    transform: translateY(-3px);
}

.btn {
    border-radius: 50px;
    padding: 0.7rem 2rem;
}

.alert {
    border-radius: 12px;
    font-weight: 500;
}

/* Fade transition for alerts */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Responsive tweaks */
@media (max-width: 768px) {
    .contact-section {
        min-height: auto;
        padding: 3rem 1rem;
    }

    .contact-form {
        padding: 2rem;
    }
}
</style>
