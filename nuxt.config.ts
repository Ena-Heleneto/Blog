/*
 * @Author: Bianyu by15242952083@outlook.com
 * @Date: 2023-07-18 18:01:41
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-07-19 18:52:27
 * @FilePath: \Blog\nuxt.config.ts
 * @Description:
 * Copyright (c) 2023 by Bianyu email: by15242952083@outlook.com, All Rights Reserved.
 */
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@element-plus/nuxt',
    'nuxt-mongoose',
    ['vite-plugin-version-mark/nuxt', { ifGitSHA: true, ifShortSHA: true, ifMeta: true, ifLog: true, ifGlobal: true }],
    '@nuxtjs/i18n',
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  mongoose: {
    uri: 'mongodb://by_blog_root:bianyu_blog_root@www.abernethy-by.com.:2024/blog?authMechanism=DEFAULT',
    options: { maxPoolSize: 20, minPoolSize: 1, autoIndex: true },
  },

  css: ['@unocss/reset/tailwind.css'],

  colorMode: { classSuffix: '' },

  nitro: {
    esbuild: { options: { target: 'esnext' } },
    prerender: { crawlLinks: false, routes: [], ignore: [] },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,

  devtools: { enabled: true },
  elementPlus: { },

  i18n: { vueI18n: './i18n.config.ts' },
})
