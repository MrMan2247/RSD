var Vue = require('vue');

var slider = require("./slider.js");
var slide  = require("./slide.js");
var effect = require("./effect.js");

var vm = new Vue({
  el: '.wrapper',
  data: {
    year: new Date().getFullYear()
  },
  computed: {
    copyright: function () {
      return "© " + this.year + " Bailey Cassel";
    }
  },
  components: {
    slider,
    slide,
    effect
  }
})