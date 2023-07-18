<!--
 * @Author: Bianyu by15242952083@outlook.com
 * @Date: 2023-07-18 18:01:41
 * @LastEditors: Bianyu by15242952083@outlook.com
 * @LastEditTime: 2023-07-18 20:32:50
 * @FilePath: \blog\layouts\home.vue
 * @Description:
 * Copyright (c) 2023 by Bianyu email: by15242952083@outlook.com, All Rights Reserved.
-->
<template>
  <div h-full w-full flex justify-center class="bg-#edf0f4 dark:bg-#222222" px-90>
    <div h-full w-full flex flex-col items-center justify-between py-4 class="bg-#FFFFFF dark:bg-#27272a">
      <CommonTheHeader />
      <main w-full flex-1>
        <slot />
      </main>
      <CommonTheFooter />
    </div>
  </div>
</template>
