import './index.scss'

const initSlider = () =>{
	const coachesList = document.querySelector('.container-5 .coaches__list')
	const slideButtons = document.querySelectorAll('.container-5 .slide-button')

	

	slideButtons.forEach(button =>{
		button.addEventListener('click', ()=>{
			const direction = button.id === 'prev-slide' ? -1: 1;
			const scrollAmount = coachesList.clientWidth * direction;
			coachesList.scrollBy({left: scrollAmount, behavior:'smooth'})
		})
	})
}

window.addEventListener('load', initSlider)