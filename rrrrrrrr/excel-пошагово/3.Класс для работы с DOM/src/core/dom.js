//специальная утилита,
//позволяющпя в будущем проще взаимодейдстовать с dom деревом

class Dom {
    constructor(selector) {
        //#app
        // event.target
        this.$el =
            typeof selector === 'string' ?
            document.querySelector(selector) :
            selector
    }

    // например $('div').html('<h1>Test</h1>').clear()
    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    // node это инстанс класса Dom
    // node.$el это сами объекты, которую мы туда положим (верстка)
    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }

        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }

        return this
    }

    on() {}
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)

    if (classes) {
        el.classList.add(classes)
    }

    return $(el)
}