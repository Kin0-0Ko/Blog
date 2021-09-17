export class Form{
	constructor(form, controls){
		this.form = form;
		this.controls = controls;
	}

	value(){
		const value = {}

		Object.keys(this.controls).forEach(contr => {
			value[contr] = this.form[contr].value
		})

		return value
	}

	clear(){
		Object.keys(this.controls).forEach(contr => {
			this.form[contr].value = ''
		})
	}

	isValid(){
		let isFormValid = true

		Object.keys(this.controls).forEach(control => {

			const validators = this.controls[control]
			let isValid = true

			validators.forEach(validator => {
				isValid = validator(this.form[control].value) && isValid
			})

			// if(!isValid){
			// 	setError(this.form[control])
			// }else{
			// 	clearError(this.form[control])
			// }

			isValid ? clearError(this.form[control]) : setError(this.form[control])

			isFormValid = isFormValid && isValid
		})


		return isFormValid
	}

}


function setError($con){
	clearError($con)
	const error = '<p class="validation-error">Введите корректное значение</p>'
	$con.classList.add('invalid')
	$con.insertAdjacentHTML('afterend', error)
	
}

function clearError($con) {

	$con.classList.remove('invalid')
	if ($con.nextSibling){
	$con.closest('.form-control').removeChild($con.nextSibling)
	}
}