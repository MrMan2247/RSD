var Vue = require("vue");

module.exports = Vue.extend({
	template: `<div class="slider-container">
			        <div class="slider">
				        <slot></slot>
				        <div v-if="buttonsEnabled" class="btns">
				            <div class="btn btn-left" @click="prev"></div>
				            <div class="btn btn-right" @click="next"></div>
				        </div>
				    </div>
				    <div v-if="buttonsEnabled" class="skip-btns">
				        <div v-for="slide in slides" :class="'btn' + (current === slide ? ' active' : '')" @click="show(slides.indexOf(slide))"></div>
				    </div>
			   </div>`,
	props: ['buttons', 'timer'],
	data () {
		return {
			i: 0,
			slides: [],
			timerID: null
		}
	},
	computed: {
		current () {
			return this.slides[this.i];
		},
		buttonsEnabled () {
			return (this.buttons === undefined ? true : (this.buttons === "false" ? false : true));
		}
	},
	methods: {
		next () {
			this.current.hide("right");
			this.i = (this.i + 1) % this.slides.length;
			this.current.show("left");
			this.resetTimer();
		},
		prev () {
			this.current.hide("left");
			this.i = Math.abs((this.i - 1) % this.slides.length);
			this.current.show("right");
			this.resetTimer();
		},
		show (index) {
			console.log(index)
			if (index < this.i) {
				this.current.hide("left");
				this.i = index;
				this.current.show("right");
				this.resetTimer();
			} else {
				this.current.hide("right");
				this.i = index;
				this.current.show("left");
				this.resetTimer();
			}
		},
		resetTimer () {
			if (this.timer !== undefined) {
				if (this.timerID !== null) {
					clearInterval(this.timerID);
				}
				this.timerID = setInterval( ()=>this.next(), this.timer );
			}
		},
		createSlide (slide) {
			this.slides.push(slide);
		}
	},
	mounted () {
		this.current.show();
		this.resetTimer();
	}
})