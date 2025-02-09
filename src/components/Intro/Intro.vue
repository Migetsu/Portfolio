<template>
    <section class="intro" id="intro">
        <div class="intro__content">
            <h1>{{ $t('heyIm') }} <span>{{ $t('myName') }}</span></h1>
            <h3>{{ $t('frontEndDeveloper') }}</h3>
            <p>{{ $t('textAboutMe') }}</p>
            <div class="intro__box">
                <a href="" class="intro__box-btn">{{ $t('hireMe') }}</a>
                <a href="" class="intro__box-btn">{{ $t('letsChat') }}</a>
            </div>
            <div class="intro__social">
                <a href="https://t.me/m1getsu" class="intro__social-link" target="_blank">
                    <fa :icon="['fab', 'telegram-plane']" />
                </a>
                <a href="https://github.com/Migetsu" class="intro__social-link" target="_blank">
                    <fa :icon="['fab', 'github']" />
                </a>
            </div>
        </div>

        <div class="intro__portfolio">
            <h3>My Portfolio</h3>
            <div class="intro__portfolio-items">
                <div class="intro__portfolio-item">
                    <img src="@/assets/images/cinephile_preview.jpg" alt="">
                    <p>Cinephile</p>
                    <a href="https://migetsu.github.io/Cinephile/#/" target="_blank">{{ $t('viewMore') }}</a>
                </div>
                <div class="intro__portfolio-item">
                    <img src="@/assets/images/cinephile_preview.jpg" alt="">
                    <p>Cinephile</p>
                    <a href="https://migetsu.github.io/Cinephile/#/" target="_blank">{{ $t('viewMore') }}</a>
                </div>
                <div class="intro__portfolio-item">
                    <img src="@/assets/images/cinephile_preview.jpg" alt="">
                    <p>Cinephile</p>
                    <a href="https://migetsu.github.io/Cinephile/#/" target="_blank">{{ $t('viewMore') }}</a>
                </div>
                <div class="intro__portfolio-item">
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