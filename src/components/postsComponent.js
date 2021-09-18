import { Component } from '../core/component'
import { apiService } from '../services/api.service'
import { TranformService } from '../services/transform.service'
import { renderPost } from '../templates/post.template'

export class PostsComp extends Component{
	constructor(id, {loader}){
		super(id)
		this.loader = loader
	}

	init(){
		this.$el.addEventListener('click', btnHandler.bind(this))
	}

	async onShow(){
		this.loader.show()
		const data = await apiService.fetchPosts()
		const posts = TranformService.fbObjectToA(data)
		const html = posts.map(post => renderPost(post, {
			withBtn: true
		}))
		this.loader.hide()
		this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
	}

	onHide(){
		this.$el.innerHTML =''
	}

}



function btnHandler(e) {
	const $el = e.target
	const id = $el.dataset.id
	const title = $el.dataset.title
	if (id) {
		let fav = JSON.parse(localStorage.getItem('favorites')) || []
		const candidate = fav.find(p => p.id === id)

		if (candidate) {

			$el.textContent = 'Сохранить'
			$el.classList.add('button-primary')
			$el.classList.remove('button-danger')

			fav = fav.filter(p => p.id !== id)

		} else {

			$el.classList.remove('button-primary')
			$el.classList.add('button-danger')
			$el.textContent = 'Удалить'

			fav.push({id, title})
		}

		localStorage.setItem('favorites', JSON.stringify(fav))
	}
}