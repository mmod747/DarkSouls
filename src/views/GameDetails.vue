<template>
  <div
    class="flex justify-center items-center flex-col w-2/4 mx-auto border border-wheat rounded-md bg-gradient-to-r from-slate-900 to-slate-700 text-white"
    v-if="gameData"
  >
    <h1
      class="text-transparent bg-clip-text text-2xl font-bold bg-gradient-to-r to-emerald-600 from-sky-400 px-2"
    >
      {{ gameData.title }}
    </h1>
    <img class="mb-1 mt-1 w-3/4" :src="gameData.thumbnail" alt="" />
    <div class="flex flex-col justify-center items-center gap-4">
      <div
        class="border border-gray-200 p-2 font-bold rounded-lg bg-gradient-to-r from-emerald-600 to-sky-400 hover:text-slate-700"
      >
        <a :href="gameData.game_url">play now</a>
      </div>

      <div
        class="flex w-3/4 mx-auto justify-center items-center border border-emerald-400 bg-gradient-to-r from-emerald-600 to-sky-400 rounded-md px-4 mb-2"
      >
        <p>{{ gameData.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { game } from '@/composables/gametype'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
const route = useRoute()
const gameData = ref<game | null>(null)
const gameId = Number(route.params.id)

onMounted(async () => {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`
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
    gameData.value = result
    console.log(gameData.value)
  } catch (error) {
    console.error(error)
  }
})
</script>
