import Router from './Router'

export default class Appliction {
    constructor (args = {}) {
        this.root = args.el

        this.router = new Router
    }

    update () {
        this.router.update()
        this.root.innerHTML = ''
        this.root.append(this.router.page.fragment)
    }
}