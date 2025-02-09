<template>
  <section class="about" id="about">
      <div class="content">
        <div class="title" data-aos="fade-up" data-aos-duration="1500"><span>{{ $t('aboutMe') }}</span></div>
        <div class="about-details">
          <div class="left" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">
            <img src="@/assets/images/main.jpg" alt="">
          </div>
          <div class="right">
            <div class="topic">{{ $t('webDevMyPassion') }}</div>
            <p data-aos="flip-down" data-aos-duration="1500" data-aos-delay="300">
              {{ $t('textAboutMe') }}
            </p>
            <div class="button" data-aos="zoom-in-right" data-aos-duration="1500" data-aos-delay="400">
              <a href="@/assets/files/cv.pdf" download><button>{{ $t('downloadCV') }}</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>

</script>

<style>

</style>