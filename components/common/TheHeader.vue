<!--
 * @Author: Bianyu by15242952083@outlook.com
 * @Date: 2023-07-18 19:40:02
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-07-19 19:32:03
 * @FilePath: \Blog\components\common\TheHeader.vue
 * @Description:
 * Copyright (c) 2023 by Bianyu email: by15242952083@outlook.com, All Rights Reserved.
-->
<script setup lang="ts">
const color = useColorMode()

useHead({ meta: [{ id: 'theme-color', name: 'theme-color', content: () => color.value === 'dark' ? '#222222' : '#ffffff' }] })
const { locale } = useI18n()
interface NavigationList { name: string; path: string }
const navigationList = ref<NavigationList[]>([
  { name: 'about', path: '/about' },
  { name: 'articles', path: '/articles' },
  { name: 'projects', path: '/projects' },
  { name: 'speaking', path: '/speaking' },
  { name: 'uses', path: '/uses' },
])

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

function handleCommand(val: string): void {
  locale.value = val
}
</script>

<template>
  <div relative w-full flex items-center justify-center>
    <div class="border-#a4b0be/30 border-none bg-#f1f2f6 shadow-#dfe4ea dark:bg-#747d8c" flex rounded-3xl shadow-sm>
      <div v-for="(item, index) in navigationList" :key="index" p-2>
        <span p-3 text-sm v-text="$t(item.name)" />
      </div>
    </div>

    <div absolute right-10 flex>
      <client-only>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <div i-clarity:language-solid class="dark:text-white" text-lg />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="cn">
                中文
              </el-dropdown-item>
              <el-dropdown-item command="en">
                English
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </client-only>
      <div class="i-carbon-sun dark:i-carbon-moon" mx-5 @click="toggleDark" />
    </div>
  </div>
</template>
