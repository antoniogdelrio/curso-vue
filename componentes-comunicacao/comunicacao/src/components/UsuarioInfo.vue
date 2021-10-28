<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{inverterNome}}</strong></p>
        <p>Idade do usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (callback)</button>
    </div>
</template>

<script>
import Barramento from '@/barramento'

export default {
    props: {
        //Validação
        'nome': {
            type: String,
            //required: true,
            /*default: function(){
                return Array(10).fill(0).join(',')
            }*/
            default: 'Anônimo'
        },
        'reiniciarFn': {
            type: Function
        },
        'alterarIdadeFn': {
            type: Function
        },
        'idade': {
            type: Number
        }
    },
    data() {
        return {
            nomeAlternativo: this.nome
        }
    },
    methods: {
        reiniciarNome() {
            const antigo = this.nome
            this.nome = 'Pedro';
            //Estratégia 1 comunicação PAI -> FILHO: declarando eventos personalizados
            this.$emit('nomeMudou', {
                novo: this.nome
            });
        }
    },
    computed: {
        inverterNome(){
            //Acesso a prop como se fosse um data
            return this.nome.split('').reverse().join('');
        }
    },
    created(){
        Barramento.$on('idadeMudou', idade => {
            this.idade = idade;
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
