import Application from './Application'

import Header from './components/Header'
import Container from './components/Container'
import Post from './components/Post'

import store from './fakedata.json'

const app = new Application({
    el: document.querySelector('#app')
})

const header = new Header
const container = new Container

for (const post of store.posts) {
    container.add(new Post(post))
}

app.router.add('/' , [header, container])
// app.router.add('/' , () => require('./pages/IndexPage'))

app.update()

