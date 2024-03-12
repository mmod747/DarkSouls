<template>
  <button @click="toggleNav" class="sm:hidden fixed z-20 right-0 top-4">
    <img class="w-8 h-8 mr-2" src="../components/icons/open-menu.svg" alt="" />
  </button>
  <nav
    :class="nav ? 'translate-x-0' : '-translate-x-80'"
    class="flex flex-col sm:flex-row fixed sm:static h-full w-60 transition duration-700 sm:h-auto gap-5 pt-4 sm:pt-0 sm:w-full sm:justify-center items-center px-2 bg-gradient-to-r from-slate-900 to-slate-700 text-white border border-b-gray-400 sm:translate-x-0"
  >
    <img class="w-20 h-20" src="../components/icons/Logo.svg" alt="" />
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-4 mx-auto">
      <RouterLink
        active-class="border-gray-200 border p-1 rounded-md bg-red-500"
        class="border-red p-1 rounded-md hover:bg-red-500 hover:border"
        :to="{ name: 'home' }"
        >Home</RouterLink
      >

      <!-- <RouterLink
        active-class="border-gray-200 border p-1 rounded-md bg-red-500"
        class="border-red p-1 rounded-md hover:bg-red-500 hover:border duration-200"
        :to="{ name: 'details' }"
        >details</RouterLink
      > -->

      <div @click="catToggle = !catToggle" class="relative">
        <p
          class="border-red p-1 rounded-md hover:bg-red-500 hover:border cursor-pointer"
          :to="{ name: 'category' }"
        >
          Game-category
        </p>

        <div
          v-show="catToggle"
          class="flex flex-col gap-3 absolute bg-gradient-to-r from-slate-900 to-slate-700 text-white border border-b-gray-400 px-4 py-2 sm:top-8 top-2 left-28 sm:left-0 transition duration-200"
        >
          <RouterLink
            active-class="border-gray-200 border p-1 rounded-md bg-red-500"
            :to="{ name: 'MMORPG' }"
            >MMOROG</RouterLink
          >
          <RouterLink
            active-class="border-gray-200 border p-1 rounded-md bg-red-500"
            :to="{ name: 'Shooter' }"
            >Shooter</RouterLink
          >
          <RouterLink
            active-class="border-gray-200 border p-1 rounded-md bg-red-500"
            :to="{ name: 'MOBA' }"
            >MOBA</RouterLink
          >
          <p>Anime</p>
          <p>Battle Royal</p>
          <p>Fantasy</p>
        </div>
      </div>
      <RouterLink
        active-class="border-gray-200 border p-1 rounded-md bg-red-500"
        class="border-red p-1 rounded-md hover:bg-red-500 hover:border duration-200"
        :to="{ name: 'Form' }"
        >Sign UP</RouterLink
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import { watchEffect, ref } from 'vue'

const catToggle = ref(false)
const nav = ref(false)
console.log('works')

const toggleNav = () => {
  nav.value = !nav.value
}

watchEffect(() => {
  console.log(nav.value)
})
</script>
