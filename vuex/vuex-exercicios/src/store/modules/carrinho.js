export default {
    //Uso de namespace que evita conflito de nome
    namespaced: true,
    state: {
        produtos: []
    },
    getters: { //Análogo à propriedades Computadas
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: { //Análogo à métodos, que alteram o state diretamente
        adicionarProduto(state, payload){
            console.log('mutation adicionarProduto sendo executada')
            state.produtos.push(payload)
        }
    },
    actions: { //Análogo à métodos assincronos, e/ou que englobam regras de negócio, e então chamam as mutations via commit
        adicionarProduto({ commit }, payload){
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000);
        }
    }
}