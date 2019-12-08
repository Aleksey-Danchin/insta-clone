import Component from '../Component'
import htmlTemplate from './index.html'

export default class Hader extends Component {
    constructor () {
        super('header')
    }

    getHtmlTemplate () {
        return htmlTemplate
    }
}