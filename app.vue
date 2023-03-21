<script setup lang="ts">
import { appName } from '~/constants'

useHead({ title: appName })

// onMounted(() => {
//   flexible(window, document)
// })
// onMounted
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
