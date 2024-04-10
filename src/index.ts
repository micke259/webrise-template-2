import './index.scss'
//@ts-ignore
import Swiper from 'swiper/bundle'
import {SwiperOptions} from 'swiper/types'
import { Navigation } from 'swiper/modules';
import Inputmask from 'inputmask';





const tabs = document.querySelectorAll('input[name="tab-btn"]')
const month = document.getElementsByClassName("abonement__selector__item__tab")
const priceTags = document.querySelectorAll(".courses__list__item__price__title")

const priceValues = Array.from(priceTags).map(tag => parseInt(tag.textContent));
const priceValues_2 = Array.from(priceTags).map(tag => parseInt(tag.textContent)*4);
const priceValues_3 = Array.from(priceTags).map(tag => parseInt(tag.textContent)*7);


tabs.forEach((tab, index) => {
	tab.addEventListener("change", () => {
		const months = parseInt(month[index].textContent)
			switch (months) {
				case 1:
					priceTags.forEach((tag, index) =>{
						priceTags[index].textContent = String(priceValues[index])
					}) 
					break;
				case 6:
					priceTags.forEach((tag, index) =>{
						priceTags[index].textContent = String(priceValues_2[index])
					}) 
					break
				case 12:
					priceTags.forEach((tag, index) =>{
						priceTags[index].textContent = String(priceValues_3[index])
					}) 
					break
			}
		
	})
})


const CoachesParams:SwiperOptions = {
	speed:200,
	loop:true,
	navigation: {
		nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  	},
	breakpoints:{
		1024:{
			slidesPerView:4,
			spaceBetween:40,
		},

		900:{
			slidesPerView:3,
		},

		768:{
			slidesPerView:2,
			spaceBetween:30,
		},

		640:{
			slidesPerView:2
		},

		320:{
			slidesPerView:1
		}
	},
	

	watchOverflow:false,
  	modules:[Navigation],
}

const swiper = new Swiper('.coaches__list', CoachesParams);

const RepliesParams:SwiperOptions = {
	loop:true,
	speed:200,
	navigation:{
		nextEl: '.advert-button-next',
		prevEl: '.advert-button-prev',
	},

	watchOverflow:false,
	modules:[Navigation]
}

const replies = new Swiper('.replies', RepliesParams)

const phoneInput = document.querySelector<HTMLInputElement>('.free__inner__input[type="text"][placeholder="Телефон"]');

Inputmask({ mask: '+7 (999) 999-99-99' }).mask(phoneInput);
