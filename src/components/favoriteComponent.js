import { Component } from '../core/component'
import { apiService } from '../services/api.service'
import { renderPost } from '../templates/post.template'

export class FavoriteComp extends Component{
	constructor(id, options){
		super(id)
		this.loader = options.loader
	}

	init(){
		this.$el.addEventListener('click', linkClick.bind(this))
	}

	onShow(){
		const fav = JSON.parse(localStorage.getItem('favorites'))
		const html =renderList(fav)
		this.$el.insertAdjacentHTML('afterbegin', html)

	}

	onHide(){
		this.$el.innerHTML = ''
	}

}

async function linkClick(e){
	e.preventDefault()
	if(e.target.classList.contains('js-link')){
		const postId = e.target.textContent
		this.$el.innerHTML = ''
		this.loader.show()
		const post = await apiService.fetchPostById(postId)
		this.loader.hide()
		this.$el.insertAdjacentHTML('afterbegin', renderPost(post, {withBtn: false}))
	}
	
}






function renderList(list = []){
	if(list.length){
		return `
		<ul>
		${list.map(i => `<li><a href="#" class="js-link">${i}</a></li>`).join(' ')}
		</ul>
		`
	}

	return '<p class="center">Вы пока ничего не добавили</p>'
}
