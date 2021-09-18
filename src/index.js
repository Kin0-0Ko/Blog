import {HeaderComponent } from './components/header';
import {NavComponent} from './components/navigation'
import {CreateComp} from './components/createComponent'
import {FavoriteComp} from './components/favoriteComponent'
import {PostsComp} from './components/postsComponent'
import {Loader} from './components/loader';


new HeaderComponent('header')
const nav =new NavComponent('navigation')
const loader = new Loader('loader')

const posts = new PostsComp('posts', {loader})
const create = new CreateComp('create')
const fav = new FavoriteComp('favorite', {loader})



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