<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário: <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
        <button @click="alterarIdadeFn">Alterar Idade (callback)</button>
    </div>
</template>

<script>
import Barramento from '@/barramento'

export default {
    props: {
        'idade': {
            type: Number
        },
        'alterarIdadeFn': {
            type: Function
        }
    },
    methods: {
        alterarIdade(){
            //this.$emit('idadeMudou', 33)
            this.idade = 33
            Barramento.$emit('idadeMudou', 33)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
