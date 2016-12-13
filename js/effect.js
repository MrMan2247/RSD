var Vue = require("vue");

module.exports = Vue.extend({
	template: `<div :class="'effect' + (state ? ' ' + state : '')">
			       <slot></slot>
			   </div>`,
	props: ['mode'],
	data () {
		return {
			state: "",
			shown: false
		}
	},
	methods: {
		show () {
			this.state = this.mode + "-in";
			this.shown = true;
		},
		hide () {
			this.state = this.mode + "-out";
			this.shown = false;
		}
	},
	created () {
		this.$parent.createEffect(this);
	}
})