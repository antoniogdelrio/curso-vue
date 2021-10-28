import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('countWordsAndPrint', function(val){
	if(!val.length)
		return ''
	
		let words = val.split(' ');

	let finalString = '';

	words.forEach(word => {
		finalString += word
		finalString += ` (${word.length}) `
	})

	return finalString.trim();
})

new Vue({
	render: h => h(App),
}).$mount('#app')
