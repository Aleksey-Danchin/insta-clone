export default class Component {
    constructor (type) {
        this.type = type
    }

    render () {
        const divElement = document.createElement('div')
        divElement.innerHTML = this.getHtmlTemplate()
        return divElement.firstElementChild
    }
}