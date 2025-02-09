<template>
  <main class="main">
    <Navbar/>
    <Intro/>
    <Skills/>
    <Portfolio/>
    <Contact/>
  </main>
  <footer class="footer">
    <Footer/>
  </footer>
</template>

<script setup>
import Navbar from "@/components/Navbar/Navbar.vue"
import Intro from "@/components/Intro/Intro.vue"
import Skills from "@/components/Skills/Skills.vue"
import Portfolio from "@/components/Portfolio/Portfolio.vue"
import Contact from "@/components/Contact/Contact.vue"
import Footer from "@/components/Footer/Footer.vue"
import {ref, reactive, computed, onMounted, onUnmounted} from 'vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ offset: 0 });
});

onUnmounted(() => {
  window.scrollTo(0, 0);
})
</script>

<style>

</style>