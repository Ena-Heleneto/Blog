<!--
 * @Author: Bianyu by15242952083@outlook.com
 * @Date: 2023-07-18 19:40:02
 * @LastEditors: Bianyu by15242952083@outlook.com
 * @LastEditTime: 2023-07-18 20:55:24
 * @FilePath: \blog\components\common\TheHeader.vue
 * @Description:
 * Copyright (c) 2023 by Bianyu email: by15242952083@outlook.com, All Rights Reserved.
-->
<script setup lang="ts">
const color = useColorMode()

useHead({ meta: [{ id: 'theme-color', name: 'theme-color', content: () => color.value === 'dark' ? '#222222' : '#ffffff' }] })

interface NavigationList { name: string; path: string }
const navigationList = ref<NavigationList[]>([
  { name: 'About', path: '/about' },
  { name: 'Articles', path: '/articles' },
  { name: 'Projects', path: '/projects' },
  { name: 'Speaking', path: '/speaking' },
  { name: 'Uses', path: '/uses' },
])

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div relative w-full flex items-center justify-center>
    <div class="border-#a4b0be/30 border-none bg-#f1f2f6 shadow-#dfe4ea dark:bg-#747d8c" flex rounded-3xl shadow-sm>
      <div v-for="(item, index) in navigationList" :key="index" p-2>
        <span p-3 text-sm v-text="item.name" />
      </div>
    </div>

    <div class="i-carbon-sun dark:i-carbon-moon" absolute right-10 @click="toggleDark" />
  </div>
</template>
