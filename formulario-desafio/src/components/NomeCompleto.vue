<template>
    <div class="completo">
        <Rotulo nome="Nome">
            <input type="text" @input="alteraNome" :value="value.nome">
        </Rotulo>
        <Rotulo nome="Sobrenome">
            <input type="text" @input="alteraSobrenome" :value="value.sobrenome">
        </Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue';

export default {
    components: { Rotulo },
    props: {
        value: {
            type: String,
            required: true
        }
    },
    methods: {
        alteraNome(event){
            return this.$emit('input', {
                nome: event.target.value,
                sobrenome: this.value.sobrenome
            })
        },
        alteraSobrenome(event){
            return this.$emit('input', {
                nome: this.value.nome,
                sobrenome: event.target.value
            })
        }
    }
}
</script>

<style>

</style>