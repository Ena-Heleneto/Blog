<!--
 * @Author: Bianyu by15242952083@outlook.com
 * @Date: 2023-07-18 19:40:28
 * @LastEditors: Bianyu by15242952083@outlook.com
 * @LastEditTime: 2023-07-18 20:56:14
 * @FilePath: \blog\components\common\TheFooter.vue
 * @Description:
 * Copyright (c) 2023 by Bianyu email: by15242952083@outlook.com, All Rights Reserved.
-->
<script setup lang="ts">
interface FooterNavigationList { name: string; path: string }
const footerNavigationList = ref<FooterNavigationList[]>([
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Speaking', path: '/speaking' },
  { name: 'Uses', path: '/uses' },
])
</script>

<template>
  <div w-full flex border-t-1 class="border-#ced6e0 dark:border-#57606f">
    <div class="w-1/2" flex items-center justify-center p-10>
      <div v-for="(item, index) in footerNavigationList" :key="index">
        <span px-4 v-text="item.name" />
      </div>
    </div>
    <div class="w-1/2" flex flex-col items-center justify-center>
      <span>©2023 Bianyu Abernethy-BY</span>
      <span>辽ICP备2023001138号-1</span>
    </div>
  </div>
</template>
