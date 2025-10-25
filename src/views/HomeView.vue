<template>
    <!-- HERO SECTION -->
    <section class="hero d-flex align-items-center text-white text-center">
        <div class="overlay"></div>
        <div class="container position-relative z-2">
            <h1 class="display-3 fw-bold mb-4 text-danger animate__animated animate__fadeInDown">
                Sales-Driven Website Design For Tour & Activity Operators
            </h1>
            <p class="lead fs-4 mb-5 animate__animated animate__fadeInUp animate__delay-1s">
                At <span class="text-orange">Travel Sites Experts</span>, we craft
                <u>high-converting websites</u> that showcase your tours, highlight destinations,
                and help you attract more travelers worldwide.
            </p>
            <router-link to="/projects"
                class="btn btn-light btn-lg px-5 py-3 fw-bold shadow-lg animate__animated animate__pulse animate__infinite">
                Explore Our Work
            </router-link>
        </div>
    </section>

    <!-- SERVICES SECTION -->
    <section class="services py-5 bg-light">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="fw-bold display-6 text-forest">What We Offer</h2>
                <p class="text-muted fs-5">
                    Powerful digital tools designed for tourism excellence
                </p>
            </div>

            <div class="row g-4">
                <div v-for="(service, index) in services" :key="service.title" class="col-md-6 col-lg-4">
                    <div class="card service-card h-100 text-center p-4 border-0 shadow-sm rounded-4"
                        :style="{ animationDelay: `${index * 0.1}s` }">
                        <div class="service-icon mb-3">
                            <i :class="service.icon" class="fa-3x"></i>
                        </div>
                        <h5 class="fw-bold mb-2 text-crimson">{{ service.title }}</h5>
                        <p class="text-muted small">{{ service.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- PROMISE SECTION -->
    <section class="promise py-5">
        <div class="container">
            <div class="row align-items-center gy-4">
                <div class="col-lg-6">
                    <h2 class="fw-bold text-forest mb-4">Why Choose Us?</h2>
                    <p class="lead text-dark mb-3">
                        We don’t just build websites — we craft
                        <strong class="text-orange">impact-driven digital experiences</strong>
                        that grow your tourism business.
                    </p>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <i class="fas fa-check-circle text-forest me-2"></i> 99.9% Uptime Hosting
                        </li>
                        <li class="mb-2">
                            <i class="fas fa-check-circle text-forest me-2"></i> Mobile-First Design
                        </li>
                        <li class="mb-2">
                            <i class="fas fa-check-circle text-forest me-2"></i> SEO & Tripadvisor Optimization
                        </li>
                        <li class="mb-2">
                            <i class="fas fa-check-circle text-forest me-2"></i> 24/7 Ugandan Support
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 text-center">
                    <img src="/src/assets/images/contact-us.png"
                        alt="Tourism Tech" class="img-fluid rounded-4 shadow-lg" />
                </div>
            </div>
        </div>
    </section>

    <!-- CTA SECTION -->
    <section class="cta text-white text-center py-5">
        <div class="overlay-forest"></div>
        <div class="container position-relative z-2">
            <h2 class="display-5 fw-bold mb-3">Let’s Build Your Digital Journey</h2>
            <p class="lead mb-4">
                From hosting to bookings — we help your tourism business reach the world.
            </p>
            <router-link to="/contact" class="btn btn-light btn-lg px-5 py-3 fw-bold text-forest shadow-lg">
                Get Started Today
            </router-link>
        </div>
    </section>
</template>

<script setup>
const services = [
    { title: "Website Hosting", description: "Lightning-fast, secure, scalable hosting for tourism sites.", icon: "fas fa-server" },
    { title: "Tour Agency Web Design", description: "Beautiful, conversion-focused websites that book more trips.", icon: "fas fa-palette" },
    { title: "Domain Registration", description: "Secure your brand with the perfect .com or .ug domain.", icon: "fas fa-globe" },
    { title: "Tripadvisor Listing", description: "Boost reviews and rank higher on Tripadvisor.", icon: "fas fa-star" },
    { title: "UTB Registration", description: "Hassle-free Uganda Tourism Board compliance support.", icon: "fas fa-university" },
    { title: "Website Redesign", description: "Modernize your site for speed, mobile, and sales.", icon: "fas fa-recycle" },
    { title: "Safari Bookings Setup", description: "Real-time booking engine for safaris and tours.", icon: "fas fa-binoculars" },
    { title: "SEO & Digital Marketing", description: "Rank #1 on Google and attract global travelers.", icon: "fas fa-chart-line" },
    { title: "Custom IT Solutions", description: "Tailored software for hotels, agencies, and operators.", icon: "fas fa-code" },
];
</script>

<style scoped>
/* COLORS */
.text-forest {
    color: forestgreen !important;
}

.text-crimson {
    color: crimson !important;
}

.text-orange {
    color: orange !important;
}

/* HERO */
.hero {
    min-height: 90vh;
    background: url('/src/assets/images/contact-us.png') center/cover no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay {
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    inset: 0;
    z-index: 1;
}

/* SERVICE CARDS */
.service-card {
    transition: all 0.4s ease;
    background-color: #fff;
    border-top: 5px solid forestgreen;
}

.service-card:hover {
    transform: translateY(-8px);
    border-top-color: orange;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.service-icon i {
    color: forestgreen;
    transition: color 0.3s ease;
}

.service-card:hover i {
    color: crimson;
}

/* CTA SECTION */
.cta {
    background: url('/src/assets/images/portifolio.jpg') center/cover no-repeat;
    position: relative;
}

.overlay-forest {
    background: linear-gradient(135deg, rgba(34, 139, 34, 0.85), rgba(220, 20, 60, 0.85));
    position: absolute;
    inset: 0;
    z-index: 1;
}

/* Buttons */
.btn-light:hover {
    background-color: orange;
    color: white !important;
}

/* Animation */
.animate__animated {
    animation-duration: 1s;
}
</style>
