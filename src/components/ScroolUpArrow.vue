<template>
  <img
    @click="scroolToTop"
    class="fixed bottom-4 left-4 w-20 h-20 cursor-pointer hover:scale-110"
    src="../components/icons/upArrow.svg"
    alt=""
  />
</template>
<script setup lang="ts">
import { scroolToTop } from '@/composables/scroolToTop'
</script>
