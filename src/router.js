import Vue              from 'vue'
import Router           from 'vue-router'
import Home             from './views/Home.vue'
import Frappes          from './views/Frappes.vue'
import Lattes           from './views/Lattes.vue'
import Mochas           from './views/Mochas.vue'
import Videos           from './views/Videos.vue'
import Hub              from './views/Hub.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/frappes',
            name: 'Frappes',
            component: Frappes
        },
        {
            path: '/lattes',
            name: 'Lattes',
            component: Lattes
        },
        {
            path: '/mochas',
            name: 'Mochas',
            component: Mochas
        },

        {
            path: '/videos',
            name: 'Videos',
            component: Videos
        },

        {
            path: '/hub',
            name: 'Hub',
            component: Hub
        }
    ]
})