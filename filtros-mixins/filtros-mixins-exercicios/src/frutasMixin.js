export default {
    data(){
        return {
            fruta: '',
            lista: ['Banana', 'Maçã', 'Laranja']
        }
    },
    methods: {
        add(){
            this.lista.push(this.fruta)

            this.fruta = ''
        }
    }
}