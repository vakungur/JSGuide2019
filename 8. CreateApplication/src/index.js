import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.components'
import {CreateComponent} from './components/create.components'
import {FavoriteComponent} from './components/favorite.component'
import {PostsComponent} from './components/posts.component'

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')

const posts = new PostsComponent('posts')
const create = new CreateComponent('create')
const favorite = new FavoriteComponent('favorite')

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])