<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
    computed: {
        //Da forma abaixo, faço com que uma propriedade computada tenha função de leitura (get) e escrita (set)
        //Como o Vuex trabalha em cima de props computadas, devo fazer isso quando preciso de two-way data binding
        quantidade: {
            get() {
                return this.$store.state.parametros.quantidade;
            },
            set(valor) {
                this.$store.commit('setQuantidade', valor)
            }
        },
        preco: {
            get() {
                return this.$store.state.parametros.preco;
            },
            set(valor) {
                this.$store.commit('setPreco', valor)
            }
        }
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
