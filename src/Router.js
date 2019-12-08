import Page from './Page'

export default class Router {
    constructor () {
        this.routes = []
        this.route = null
        this.page = null
    }

    add (path, container) {
        this.routes.push({
            path, container
        })
    }

    update () {
        for (const route of this.routes) {
            if (route.path.match(location.path)) {
                this.route = route
                this.page = new Page(route.container)
            }
        }
    }
}