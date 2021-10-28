import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = "https://curso-vue-12669-default-rtdb.firebaseio.com/";
// axios.defaults.headers.common['Authorization'] = 'dad4f6as5d4f6as4dfa'
// axios.defaults.headers.get['Accepts'] = 'fhj54f6ghj4f6hj'

Vue.use({
    install(Vue){
        //Posso criar diferentes instâncias do Axios, no caso a instância abaixo está referenciada em $http
        Vue.prototype.$http = axios.create({
            baseURL: "https://curso-vue-12669-default-rtdb.firebaseio.com/",
            headers: {
                //Abaixo, a configuração para header especificos para um método
                // get: {
                //     'Authorization': 'asd5asd8a7sd9'
                // }
                'Authorization': 'MINHA_CHAVE'
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        })

        Vue.prototype.$http.interceptors.response.use(res => {
            const array = []

            for(let chave in res.data) {
                array.push({
                    id: chave,
                    ...res.data[chave]
                })
            }

            res.data = array

            return res
        })
    }
})