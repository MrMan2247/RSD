var Vue = require("vue");

module.exports = Vue.extend({
	template: `<div :class="'slide' + (animation ? ' ' + animation : '')" :style='style'>
			       <div class="slide-content">
			           <slot></slot>
			       </div>
			   </div>`,
	props: ['background'],
	data () {
		return {
			animation: null,
			effects: [],
			shown: false
		}
	},
	computed: {
		style () {
			if (this.background) {
				return "background-image: url('" + this.background + "');";
			} else {
				return "";
			}
		}
	},
	methods: {
		show ( dir ) {
			if (dir === "left") {
				this.animation = "from-right";
			} else if (dir === "right") {
				this.animation = "from-left";
			} else {
				this.animation = "force-show";
			}
			this.shown = true;
			this.effects.forEach((e)=>e.show())
		},
		hide ( dir ) {
			if (dir === "left") {
				this.animation = "to-right";
			} else if (dir === "right") {
				this.animation = "to-left";
			} else {
				this.animation = "force-hide";
			}
			this.shown = false;
			this.effects.forEach((e)=>e.hide())
		},
		createEffect ( effect ) {
			this.effects.push(effect);
		}
	},
	created () {
		this.$parent.createSlide(this);
	}
})