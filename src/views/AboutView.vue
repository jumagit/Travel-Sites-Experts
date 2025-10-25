<template>
    <!-- HERO -->
    <section class="about-hero d-flex align-items-center text-center text-white position-relative">
        <div class="overlay"></div>
        <div class="container position-relative z-2">
            <h1 class="display-4 fw-bold mb-3 animate__animated animate__fadeInDown text-white">
                About TravelSitesExperts
            </h1>
            <p class="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                At TravelSitesExperts, we specialize in designing modern, engaging, and
                user-friendly websites tailored for tour and travel businesses. Our
                mission is to help travel agencies showcase their services, attract more
                clients, and build trust online.
                <br /><br />
                With a team of passionate designers and developers, we combine
                creativity and technology to deliver solutions that not only look
                stunning but also drive conversions.
            </p>
            <router-link to="/contact"
                class="btn btn-accent btn-lg shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
                Work With Us
            </router-link>
        </div>
    </section>

    <!-- MISSION / VISION / VALUES -->
    <section class="py-5 text-center" style="background-color: #faf0e6">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-4" v-for="(item, i) in missionData" :key="i">
                    <div class="card card-body shadow-sm h-100 border-0">
                        <h3 class="mb-2">
                            <i :class="item.icon + ' fa-2x ' + item.color"></i>
                        </h3>
                        <h4 class="fw-bold text-primary">{{ item.title }}</h4>
                        <p class="fs-5 text-muted mx-auto">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- STORY -->
    <section class="py-5 bg-white">
        <div class="container">
            <div class="row align-items-center gy-4">
                <div class="col-md-12">
                    <h2 class="fw-bold text-primary mb-3">Our Story</h2>
                    <p class="fs-5 text-muted mb-3">
                        Many travel businesses have breathtaking destinations and
                        unforgettable experiences to offer — yet struggle to turn website
                        visitors into real bookings. We noticed that too many tour agencies
                        were losing potential customers simply because their websites didn’t
                        reflect the excitement and beauty of what they provide.
                    </p>
                    <blockquote class="blockquote">
                        <h4 class="fst-italic">
                            That’s how TravelSitesExperts was born. With years of experience
                            in the tourism industry, we set out to bridge the gap between
                            travel passion and digital success. Our team specializes in
                            creating custom websites, branding, and marketing strategies
                            designed specifically for tour operators, lodges, and travel
                            companies.
                        </h4>
                    </blockquote>
                    <p class="fs-5 text-muted">
                        At TravelSitesExperts, our mission is clear: to help tourism brands
                        attract more travelers, highlight their unique experiences, and
                        provide a smooth, inspiring online journey that turns visitors into
                        loyal explorers.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- CORE VALUES -->
    <section class="py-5 bg-light text-center">
        <div class="container">
            <h2 class="fw-bold text-primary mb-5">Core Values</h2>
            <div class="row g-4 justify-content-center">
                <div v-for="(value, index) in values" :key="index" class="col-md-3 col-sm-6">
                    <div class="value-card bg-white rounded-4 shadow-sm p-4 h-100 animate__animated animate__fadeInUp"
                        :style="{ animationDelay: `${index * 0.1}s` }">
                        <div class="icon mb-3 text-accent">
                            <i :class="value.icon + ' fa-2x'"></i>
                        </div>
                        <h5 class="fw-bold mb-2">{{ value.title }}</h5>
                        <p class="small text-muted">{{ value.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta-section py-5 text-center text-white position-relative">
        <div class="overlay-gradient"></div>
        <div class="container position-relative z-2">
            <h2 class="fw-bold display-6 mb-3">
                Let’s Build the Future of Tourism Tech
            </h2>
            <p class="lead mb-4">
                Partner with Salama Hosting to bring your digital vision to life.
            </p>
            <router-link to="/contact" class="btn btn-light btn-lg px-5 fw-bold shadow-lg">
                Contact Us
            </router-link>
        </div>
    </section>
</template>

<script setup>

// Static values for mission/vision/core values
const missionData = [
    {
        title: 'Our Mission',
        text: 'To empower travel agencies with websites that inspire travelers and boost bookings.',
        icon: 'fa fa-star',
        color: 'text-danger',
    },
    {
        title: 'Our Vision',
        text: 'To be the go-to web design partner for travel businesses worldwide, delivering innovation and growth.',
        icon: 'fa fa-eye',
        color: 'text-info',
    },
    {
        title: 'Core Values',
        text: 'Creativity, integrity, and a commitment to excellence in every website we build.',
        icon: 'fa fa-cog',
        color: 'text-primary',
    },
];

const values = [
    {
        title: 'Innovation',
        text: 'Always seeking smarter, modern IT solutions.',
        icon: 'fas fa-lightbulb',
    },
    {
        title: 'Reliability',
        text: 'Delivering dependable uptime and fast support.',
        icon: 'fas fa-shield-alt',
    },
    {
        title: 'Integrity',
        text: 'Building lasting partnerships with transparency.',
        icon: 'fas fa-handshake',
    },
    {
        title: 'Customer Focus',
        text: 'Your goals guide everything we build.',
        icon: 'fas fa-users',
    },
];
</script>

<style scoped>
/* HERO */
.about-hero {
    background: url('@/assets/images/about-us.jpg') center/cover no-repeat;
    min-height: 75vh;
    position: relative;
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
}

/* ACCENT COLORS */
.text-accent {
    color: #ffb703;
}

.btn-accent {
    background: #ffb703;
    color: #000;
    border: none;
    transition: 0.3s;
}

.btn-accent:hover {
    background: #e0a200;
    color: #000;
}

/* VALUE CARDS */
.value-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-top: 4px solid #ffb703;
}

.value-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* CTA SECTION */
.cta-section {
    background: url('@/assets/images/portifolio.jpg') center/cover no-repeat;
    min-height: 50vh;
    position: relative;
}

.overlay-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 86, 179, 0.9), rgba(153, 0, 0, 0.85));
}

/* RESPONSIVE */
@media (max-width: 768px) {
    .about-hero {
        min-height: 55vh;
        background-position: top center;
    }

    .lead {
        font-size: 1rem;
    }

    h1.display-4 {
        font-size: 2rem;
    }
}
</style>
