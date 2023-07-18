/*
 * @Author: Bianyu by15242952083@outlook.com
 * @Date: 2023-07-18 18:01:42
 * @LastEditors: Bianyu by15242952083@outlook.com
 * @LastEditTime: 2023-07-18 20:02:26
 * @FilePath: \blog\uno.config.ts
 * @Description:
 * Copyright (c) 2023 by Bianyu email: by15242952083@outlook.com, All Rights Reserved.
 */
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.2 }),
    presetTypography(),
    presetWebFonts({ fonts: { sans: 'DM Sans', serif: 'DM Serif Display', mono: 'DM Mono' } }),
    presetMini(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
