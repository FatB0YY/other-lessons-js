//специальная утилита,
//позволяющпя в будущем проще взаимодейдстовать с dom деревом

class Dom {}

export function $() {
    return new Dom()
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)

    if (classes) {
        el.classList.add(classes)
    }

    return el
}