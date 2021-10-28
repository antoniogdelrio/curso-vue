import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

//Importação de getters 'globais'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    //Estado global, fora dos módulos
    state: {
        nome: 'Maria',
        sobrenome: 'Silva'
    },
    //Getters globais
    getters: {
        ...getters
    },
    modules: {
        carrinho,
        parametros
    }
})