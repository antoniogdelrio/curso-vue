<template>
    <div>
        <ul>
            <li v-for="fruta in lista" :key='fruta'>{{fruta}}</li>
            <input type="text" v-model="fruta" @keydown.enter="add">
        </ul>
    </div>
</template>

<script>
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'

export default {
    mixins: [
        frutasMixin,
        usuarioMixin
    ],
    created(){
        console.log('created em frutaMixin')
    }
}
</script>

<style>

</style>