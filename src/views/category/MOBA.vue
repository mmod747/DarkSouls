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
    class="w-3/4 mx-auto mt-4 sm:mt-3 grid sm:grid-cols-2 lg:grid-cols-3 justify-center items-center lg:pt-4 lg:gap-4 sm:gap-2"
  >
    <div
      v-for="game in filteredList"
      :key="game.id"
      class="flex justify-center mx-auto mb-2 sm:mb-2 sm:mx-0 sm:w-auto items-center flex-col border border-wheat rounded-md bg-gradient-to-r from-slate-900 to-slate-700 text-white"
    >
      <h1
        class="text-transparent bg-clip-text text-2xl font-bold bg-gradient-to-r to-emerald-600 from-sky-400 px-2"
      >
        {{ game.title }}
      </h1>
      <img class="mb-1" :src="game.thumbnail" alt="" />
      <div class="flex flex-col md:flex-row justify-center items-center gap-2 sm:gap-4 lg:gap-8">
        <div class="flex gap-2 md:flex-col xl:px-2 2xl:px-0">
          <div
            class="border border-gray-200 px-1 py-2 text-center font-bold rounded-lg bg-gradient-to-r from-emerald-600 to-sky-400 hover:text-slate-700"
          >
            <a :href="game.game_url">play now</a>
          </div>
          <RouterLink
            class="border border-gray-200 p-2 font-bold rounded-lg bg-gradient-to-r from-emerald-600 to-sky-400 hover:text-slate-700"
            :to="{ name: 'details', params: { id: game.id } }"
            >Details</RouterLink
          >
        </div>
        <div
          class="flex flex-col border border-emerald-400 bg-gradient-to-r from-emerald-600 to-sky-400 rounded-md px-4 mb-2 xl:mr-2 2xl:mr-0"
        >
          <p>genre: {{ game.genre }}</p>
          <p>Platform :{{ game.platform }}</p>
          <p>Date :{{ game.release_date }}</p>
          <p>{{ game.developer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { game } from '@/composables/gametype'
import { onMounted, ref, watchEffect } from 'vue'

const MobaGames = ref<game[]>([])
const filteredList = ref<game[]>([])
const searchKey = ref<String | null>(null)
const load = ref(false)

const search = () => {
  filteredList.value = MobaGames.value.filter((game) => {
    return game.title.toLowerCase().includes(searchKey.value!.toLowerCase())
  })
}

watchEffect(() => {
  if (searchKey.value != null) {
    search()
    console.log(searchKey.value)
  }
})

onMounted(async () => {
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=MOBA'
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
    MobaGames.value = result
    filteredList.value = result
  } catch (error) {
    console.error(error)
  }
})
</script>
