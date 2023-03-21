// export const setDomFontSize = (document): void => {
//   const width = document.documentElement.clientWidth || document.body.clientWidth
//   const scale = 37.5 * Math.min((width <= 1200 ? 1200 : width) / 1920, 2)
//   const fontsize = `${scale}px`;
//   (document.getElementsByTagName('html')[0].style as any)['font-size'] = fontsize
// }
// // (() => setDomFontSize())()

// // const setDomFontSizeDebounce = _.debounce(setDomFontSize, 400)
// // window.addEventListener('resize', setDomFontSizeDebounce)

// export default defineNuxtPlugin((nuxtApp) => {
//   (() => setDomFontSize(document))()
//   const setDomFontSizeDebounce = _.debounce(setDomFontSize, 400)
//   window.addEventListener('resize', setDomFontSizeDebounce)
// })
