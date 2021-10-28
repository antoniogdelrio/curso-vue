new Vue({
	el: '#desafio',
	data: {
		efeito: true,
		userClass: '',
		booleanClass: 'false',
		userRadius: 0,
		progressBarBGStyle: "linear-gradient(90deg, blue 0%, white 0%)",
		progressBarCounter: 0,
	},
	computed: {
		booleanClassApply() {
			return this.booleanClass == 'true' ? true : this.booleanClass == 'false' ? false : false;
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.efeito = !this.efeito;
			}, 1500);
		},
		iniciarProgresso() {
			var progressInterval = setInterval(() => {
				console.log(this.progressBarCounter)
				this.progressBarBGStyle = `linear-gradient(90deg, blue ${this.progressBarCounter}%, white 0%)`;
				this.progressBarCounter++;

				if(this.progressBarCounter > 100)
					clearInterval(progressInterval);

			}, 30);
		}
	}
})
