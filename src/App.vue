<template>
  <header>
    <NavBar />
  </header>

  <main class="bg-site-bg bg-cover bg-fixed min-h-screen pt-4">
    <RouterView />
  </main>
  <ScroolUpArrow v-show="showButton" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ScroolUpArrow from './components/ScroolUpArrow.vue'
import NavBar from './views/NavBar.vue'

const showButton = ref(false)

const handleScroll = () => {
  const scrollY = window.scrollY
  const screenHeight = window.innerHeight
  console.log(screenHeight)

  if (scrollY >= screenHeight) {
    showButton.value = true
  } else {
    showButton.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
