export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = document.createElement('div')
            //$root.textContent = 'TEST $root'

        this.components.forEach((Component) => {
            const component = new Component()
            $root.insertAdjacentHTML('beforeend', component.toHTML())
        })
        return $root
    }

    render() {
        this.$el.append(this.getRoot())
    }
}