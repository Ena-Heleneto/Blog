export const flexible = (window: Window, document: Document) => {
  const docEl = document.documentElement
  const dpr = window.devicePixelRatio || 1

  const setBodyFontSize = () => {
    if (document.body)
      document.body.style.fontSize = `${12 * dpr}px`
    else
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
  }

  setBodyFontSize()

  const setRemUnit = () => {
    const rem = docEl.clientWidth / 10
    docEl.style.fontSize = `${rem}px`
  }
  setRemUnit()

  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', (e) => {
    if (e.persisted)
      setRemUnit()
  })

  if (dpr >= 2) {
    const fakeBody = document.createElement('body')
    const testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1)
      docEl.classList.add('hairlines')

    docEl.removeChild(fakeBody)
  }
}
