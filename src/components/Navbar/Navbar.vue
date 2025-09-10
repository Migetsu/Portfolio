<template>
  <nav class="nav" :class="{ color: scrolled > 0 }">
    <div class="nav__content nav-container">
      <div class="nav__content-logo" data-aos="zoom-in" data-aos-duration="1500" @click="resetScroll">{{ $t('myName') }}
      </div>
      <div class="nav__content-links">
        <a href="#" class="nav__content-link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200"
          @click="scrollToSection($event, 'intro')">{{
            $t('about') }}</a>
        <a href="#" class="nav__content-link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300"
          @click="scrollToSection($event, 'skills')">{{
            $t('skills') }}</a>
        <!-- <a href="#" class="nav__content-link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"
          @click="scrollToSection($event, 'portfolio')">{{
            $t('portfolio') }}</a> -->
        <!-- <a href="#" class="nav__content-link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500"
          @click="scrollToSection($event, 'contact')">{{
            $t('contact') }}</a> -->
        <fa :icon="['fas', 'sliders-h']" class="nav__content-icon fa lang"
          @click="langDropdownActive = !langDropdownActive" data-aos="fade-up" data-aos-duration="1500"
          data-aos-delay="600" />
        <transition name="fade">
          <div class="lang-dropdown" :class="{ active: langDropdownActive }" v-if="langDropdownActive">
            <button class="lang-dropdown-en" :class="{ active: locale == 'en' }" @click="changeLang('en')">EN</button>
            <button class="lang-dropdown-ru" :class="{ active: locale == 'ru' }" @click="changeLang('ru')">RU</button>
            <span class="lang-dropdown-span" :class="{ active: locale == 'en' }"></span>
          </div>
        </transition>
        <fa :icon="['fas', 'bars']" class="hamburg" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700" @click="toggleDropdown(true)" />
      </div>
    </div>

    <transition name="fade">
      <div class="dropdown" :class="{ 'dropdown-visible': dropdownVisible }">
        <div class="dropdown-logo" @click="resetScroll, toggleDropdown(false)">{{ $t('myName') }}
        </div>
      <div class="links">
        <a href="#" @click="scrollToSection($event, 'intro'), toggleDropdown(false)">{{ $t('about') }}</a>
        <a href="#" @click="scrollToSection($event, 'skills'), toggleDropdown(false)">{{ $t('skills') }}</a>
        <!-- <a href="#" @click="scrollToSection($event, 'portfolio'), toggleDropdown(false)">{{ $t('portfolio')}}</a> -->
        <!-- <a href="#" @click="scrollToSection($event, 'contact'), toggleDropdown(false)">{{ $t('contact') }}</a> -->
        <fa :icon="['fas', 'xmark']" @click="toggleDropdown(false)" class="cancel" />
      </div>
    </div>
    </transition>
  </nav>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n';

const dropdownVisible = ref(false);
const langDropdownActive = ref(false);
const langDropdownActive2 = ref(false);


const toggleDropdown = (state) => {
  dropdownVisible.value = state;
};

const changedLang = ref(true)
const { locale } = useI18n();

const changeLang = (language) => {
  if (locale.value !== language) {
    locale.value = language;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ offset: 0 });
});

const scrollToSection = (event, sectionId) => {
  event.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = document.querySelector('.nav').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - navHeight;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

const resetScroll = () => {
  window.scrollTo(0, 0);
}

const scrolled = ref(0)
const updateScroll = () => {
  scrolled.value = window.scrollY
}

onMounted(() => {
  window.scrollTo(0, 0);
  window.addEventListener('scroll', updateScroll)
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });
})
</script>

<style></style>