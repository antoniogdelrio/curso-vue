<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{usuarioLogado}}</p>
		<p>{{cpfAluno | cpf | inverter}}</p>
		<input type="text" :value="cpfAluno | cpf | inverter">
		<hr>
		<Frutas />
		<hr>
		<ul>
            <li v-for="fruta in lista" :key='fruta'>{{fruta}}</li>
            <input type="text" v-model="fruta" @keydown.enter="add">
        </ul>
	</div>
</template>

<script>
import Frutas from './Frutas.vue';
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'

export default {
	mixins: [
        frutasMixin,
        usuarioMixin
    ],
	components: { Frutas },
	filters: {
		cpf(valor){
			const arr = valor.split('');
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')

			return arr.join('');
		}
	},
	data(){
		return {
			cpfAluno: '12365478912',
			lista: ['Abacate']
		}
	},
    created(){
        console.log('created em App.vue')
    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 2.5rem;
}
</style>
