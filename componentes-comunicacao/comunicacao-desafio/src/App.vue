<template>
	<div id="app">
		<usuario-lista :usuarios="usuarios" @userClick="changeUser"/>
		<usuario-detalhe :usuario="showUser" />
		<button @click="showUser = null">Reset</button>
	</div>
</template>

<script>
import UsuarioLista from './components/UsuarioLista.vue'
import UsuarioDetalhe from './components/UsuarioDetalhe.vue'

export default {
	name: "app",
	components: { UsuarioLista, UsuarioDetalhe },
    data() {
        return {
            usuarios: [
                { id: 1, nome: 'Ana', idade: 31 },
                { id: 2, nome: 'Carlos', idade: 22 },
                { id: 3, nome: 'Daniel', idade: 40 },
                { id: 4, nome: 'Ema', idade: 17 },
                { id: 5, nome: 'Lia', idade: 28 }
            ],
			userToShowID: null
        }
    },
	computed: {
		showUser(){
			const user = this.usuarios.filter((user) => {
				return user.id == this.userToShowID;
			});

			return user ? user[0] : null;
		}
	},
	methods: {
		changeUser(userID){
			this.userToShowID = userID;
		}
	}
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;

	display: flex;
	font-size: 2rem;
}

#app div {
	margin: 20px;
}
</style>
