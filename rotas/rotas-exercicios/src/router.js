import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'

import Menu from './components/template/Menu'

// import comum, feito no bundle
// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioEditar from './components/usuario/UsuarioEditar'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'

Vue.use(Router)

//import dinâmico (lazy), que usa uma função
//o comentário webpackChunkName é uma diretiva para que o webpack agrupe arquivos num unico arquivo de nome usuario.js para fazer menos requisições http no import dinâmico
const Usuario = () => import(/* webpackChunkName: 'usuario' */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: 'usuario' */'./components/usuario/UsuarioLista')
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')
const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
        if(savedPosition)
            return savedPosition

        if(to.hash){
            return {
                    selector: to.hash
            }
        }

        return {
            x: 0,
            y: 0
        }
    },
    routes: [
        {
            path: '/',
            // component: Inicio,
            name: 'inicio',
            components: {
                default: Inicio,
                menu: Menu
            }
        },
        {
            path: '/usuario',
            component: Usuario,
            props: true,
            children: [
                {
                    path: '',
                    component: UsuarioLista
                },
                {
                    path: ':id',
                    component: UsuarioDetalhe,
                    props: true,
                    beforeEnter: (to, from, next) => {
                        console.log('antes da rota => usuario detalhe')
                        next()
                    }
                },
                {
                    path: ':id/editar',
                    component: UsuarioEditar,
                    props: true,
                    name: 'editarUsuario'
                }
            ]
        },
        {
            path: '/redirecionar',
            redirect: '/usuario'
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas => global')
    
    next()
})

export default router