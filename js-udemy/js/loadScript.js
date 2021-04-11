'use strict'

function loadScript(src) {
    const script = document.createElement('script')
    script.src = src
    script.async = false // обычный скрипт при false
    document.body.append(script) // async default
}
loadScript('js/dom.js')
loadScript('js/sort.js')