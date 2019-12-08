import Component from '../Component'
import htmlTemplate from './index.html'

export default class Container extends Component {
    constructor () {
        super('container')

        this.components = []
    }

    add (component) {
        this.components.push(component)
    }

    render () {
        const element = super.render()
        element.append(...this.components.map(x => x.render()))
        return element
    }

    getHtmlTemplate () {
        return htmlTemplate
    }
}