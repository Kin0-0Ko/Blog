import { Component } from '../core/component';


export class NavComponent extends Component{
	constructor(id){
		super(id)

		this.tabs = [];
	};

	init(){
		this.$el.addEventListener('click', tabChange.bind(this))
	}

	regTabs(tabs){
		this.tabs = tabs
	}
}

function tabChange(e){
	e.preventDefault();
	if(e.target.classList.contains('tab')){
		Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
			tab.classList.remove('active');
		});
		e.target.classList.add('active')
	}
	
	let activeTab = this.tabs.find(t => t.name == e.target.dataset.name)
	this.tabs.forEach(t => t.component.hide())
	activeTab.component.show()

}