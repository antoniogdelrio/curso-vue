new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Mostrando alert');
        },
        saveValue(event) {
            this.valor = event.target.value;
        }
    }
})