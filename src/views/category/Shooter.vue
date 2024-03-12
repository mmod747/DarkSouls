<template>
  <section
    class="py-3 w-3/4 mx-auto bg-gradient-to-r from-green-900 to-blue-700 text-white rounded-lg border border-b-gray-400"
  >
    <div class="flex justify-center items-center text-black">
      <button>
        <img class="w-8 h-8 mr-4" src="../../components/icons/SearchBtn.svg" alt="" />
      </button>
      <input
        v-model="searchKey"
        class="text-center rounded-md outline-none border-2 focus:border-emerald-400"
        type="text"
        placeholder="Search"
      />
    </div>
  </section>

  <!-- loading logo -->
  <div
    v-show="load"
    class="flex justify-center items-center h-screen absolute top-0 left-0 w-full bg-black bg-opacity-50"
  >
    <div class="relative flex justify-center items-center">
      <div
        class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"
      ></div>
      <img src="../../components/icons/controller.svg" class="rounded-full h-24 w-24" />
    </div>
  </div>
  <!-- loading logo -->

  <main class="w-3/4 mx-auto grid grid-cols-3 justify-center items-baseline pt-4 gap-4">
    <div
      v-for="game in filteredList"
      :key="game.id"
      class="flex justify-center items-center flex-col border border-wheat rounded-md bg-gradient-to-r from-slate-900 to-slate-700 text-white"
    >
      <h1
        class="text-transparent bg-clip-text text-2xl font-bold bg-gradient-to-r to-emerald-600 from-sky-400 px-2"
      >
        {{ game.title }}
      </h1>
      <div @click="toggleDetails">
        <img class="mb-1 cursor-pointer" :src="game.thumbnail" alt="" />
      </div>
      <div class="flex justify-center items-center gap-8">
        <div
          class="border border-gray-200 px-1 py-2 font-bold rounded-lg bg-gradient-to-r from-emerald-600 to-sky-400 hover:text-slate-700"
        >
          <a :href="game.game_url">play now</a>
        </div>
        <RouterLink
          class="border border-gray-200 p-2 font-bold rounded-lg bg-gradient-to-r from-emerald-600 to-sky-400 hover:text-slate-700"
          :to="{ name: 'details', params: { id: game.id } }"
          >Details</RouterLink
        >
        <div
          class="flex flex-col border border-emerald-400 bg-gradient-to-r from-emerald-600 to-sky-400 rounded-md px-4 mb-2"
        >
          <p>genre: {{ game.genre }}</p>
          <p>Platform :{{ game.platform }}</p>
          <p>Date :{{ game.release_date }}</p>
          <p>{{ game.developer }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import type { game } from '@/composables/gametype'

import { onMounted, ref, watchEffect } from 'vue'

const ShooterGame = ref<game[]>([])
const filteredList = ref<game[]>([])
const searchKey = ref<string | null>(null)
const Details = ref(true)
const load = ref(false)
const toggleDetails = () => {
  Details.value = !Details.value
}

const search = () => {
  filteredList.value = ShooterGame.value.filter((game) => {
    return game.title.toLowerCase().includes(searchKey.value!.toLowerCase())
  })
}

watchEffect(() => {
  if (searchKey.value != null) {
    // console.log(searchKey.value)
    search()
  }
})

onMounted(async () => {
  load.value = true
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=Shooter'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7e0d111a46mshaff2632bf063a96p199446jsnba2496738986',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    ShooterGame.value = result
    filteredList.value = result
    load.value = false
  } catch (error) {
    console.error(error)
  }
})
</script>
