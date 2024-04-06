import './index.scss'
//@ts-ignore
import Swiper from 'swiper/bundle'
import {SwiperOptions} from 'swiper/types'
import { Navigation } from 'swiper/modules';



const CoachesParams:SwiperOptions = {
	slidesPerView:4,
	speed:200,
	loop:true,
	navigation: {
		nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  	},

	

	watchOverflow:false,
  	modules:[Navigation],
}

const swiper = new Swiper('.coaches__list', CoachesParams);

const RepliesParams:SwiperOptions = {
	slidesPerView:1,
	loop:true,
	navigation:{
		nextEl: 'swiper-button-next',
		prevEl: 'swiper-button-prev',
	},

	watchOverflow:false,
	modules:[Navigation]
}

const replies = new Swiper('.replies', RepliesParams)
