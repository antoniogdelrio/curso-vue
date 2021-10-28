export default {
    computed: {
		colonInSpacesComputed(){
			return this.value.replaceAll(' ', ',');
		},
		countWordsAndPrintComputed(){
			if(!this.value)
				return ''

			let words = this.value.split(' ');

			let finalString = '';

			words.forEach(word => {
				finalString += word
				finalString += ` (${word.length}) `
			})

			return finalString.trim();
		}
	}
}