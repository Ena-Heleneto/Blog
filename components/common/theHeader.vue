<script lang="ts" setup>
const color = useColorMode()

const toggleDark = () => color.preference = color.value === 'dark' ? 'light' : 'dark'
</script>

<template>
  <div w-full h-60px flex items-center justify-between px-10>
    <div />
    <button class="!outline-none" @click="toggleDark">
      <div class="dark:i-carbon-moon i-carbon-sun" />
    </button>
  </div>
</template>
