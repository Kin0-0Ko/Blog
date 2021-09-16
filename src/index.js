import { HeaderComponent } from './components/header';
import {NavComponent} from './components/navigation'
import {CreateComp} from './components/createComponent'
import {FavoriteComp} from './components/favoriteComponent'
import {PostsComp} from './components/postsComponent'


new HeaderComponent('header')
const nav =new NavComponent('navigation')
const posts = new PostsComp('posts')
const create = new CreateComp('create')
const fav = new FavoriteComp('favorite')



nav.regTabs([
	{
		name: 'create',
		component: create
	}, {
		name: "posts",
		component: posts
	},
	{
		name: 'favorite',
		component: fav
	},

])