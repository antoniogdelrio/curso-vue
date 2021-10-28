new Vue({
    el: "#desafio",
    data: {
        name: "Antonio",
        age: "21",
        googleImage: "https://www.geekshow.com.br/img/products/goku-super-saiyan-4-super-master-stars-piece-dragon-ball-banpresto_1_1200.jpg"
    },
    methods: {
        randomNumber(){
            return Math.random();
        }
    }
})