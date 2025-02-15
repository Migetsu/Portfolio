<template>
    <section class="intro" id="intro">
        <div class="intro__content">
            <h1 data-aos="zoom-in" data-aos-duration="1500">{{ $t('heyIm') }} <span>{{ $t('myName') }}</span></h1>
            <h3 data-aos="fade-right" data-aos-duration="1500">{{ $t('frontEndDeveloper') }}</h3>
            <p data-aos="zoom-in" data-aos-duration="1500">{{ $t('textAboutMe') }}</p>
            <div class="intro__box">
                <a href="https://t.me/m1getsu" class="intro__box-btn" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" target="_blank">{{ $t('hireMe') }}</a>
                <a href="https://t.me/m1getsu" class="intro__box-btn" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" target="_blank">{{ $t('letsChat') }}</a>
            </div>
            <div class="intro__social">
                <a href="https://t.me/m1getsu" class="intro__social-link" target="_blank" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="400">
                    <fa :icon="['fab', 'telegram-plane']" />
                </a>
                <a href="https://github.com/Migetsu" class="intro__social-link" target="_blank" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
                    <fa :icon="['fab', 'github']" />
                </a>
            </div>
        </div>

        <div class="intro__portfolio">
            <h3 data-aos="fade-left" data-aos-duration="1500">{{ $t('myPortfolio') }}</h3>
            <div class="intro__portfolio-items">
                <div class="intro__portfolio-item" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
                    <img src="@/assets/images/cinephile_preview.jpg" alt="">
                    <p>Cinephile</p>
                    <a href="https://migetsu.github.io/Cinephile/#/" target="_blank">{{ $t('viewMore') }}</a>
                </div>
                <div class="intro__portfolio-item" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="600">
                    <img src="@/assets/images/cinephile_preview.jpg" alt="">
                    <p>Cinephile</p>
                    <a href="https://migetsu.github.io/Cinephile/#/" target="_blank">{{ $t('viewMore') }}</a>
                </div>
                <div class="intro__portfolio-item" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="700">
                    <img src="@/assets/images/cinephile_preview.jpg" alt="">
                    <p>Cinephile</p>
                    <a href="https://migetsu.github.io/Cinephile/#/" target="_blank">{{ $t('viewMore') }}</a>
                </div>
                <div class="intro__portfolio-item" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="800">
                    <img src="@/assets/images/cinephile_preview.jpg" alt="">
                    <p>Cinephile</p>
                    <a href="https://migetsu.github.io/Cinephile/#/" target="_blank">{{ $t('viewMore') }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style></style>