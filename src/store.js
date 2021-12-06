import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        hub:
        {
                coffeShop: "La Fontaine"
        },
        affiliates: [
            {title: "Environnement I",      src: "https://media-cdn.tripadvisor.com/media/photo-s/0b/7e/aa/3e/l-interieur-de-la-fontaine.jpg"},
            {title: "Environnement II",     src: "https://i.pinimg.com/originals/d5/49/fd/d549fd5a412049a67028166c225eeae5.jpg"},
            {title: "Environnement III",    src: "https://leparisblog.com/wp-content/uploads/2016/09/fontaine-de-belleville-6.jpg"},
            {title: "Environnement IV",     src: "https://i0.wp.com/www.urbansider.com/wp-content/uploads/2019/06/FontainedeBelleville.jpg?fit=1080%2C1346&ssl=1"},
            {title: "Environnement V",      src: "https://cafedelafontaine.com.au/wp-content/uploads/2020/04/img_1831.jpg?w=640"},
            {title: "Environnement VI",     src: "https://media-cdn.tripadvisor.com/media/photo-s/1a/f0/e8/8b/photo1jpg.jpg"},
        ],
        frappes: [
            {title: "Frappe I",             src: "https://diethood.com/wp-content/uploads/2018/07/Frappe-Coffee.jpg"},
            {title: "Frappe II",            src: "https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/16851/classicfrappacinocoffee.jpg"},
            {title: "Frappe III",           src: "https://app.mywaycoffee.com.br/wp-content/uploads/2020/04/IMG_2257-scaled-e1635439152980-666x828.jpg"},
            {title: "Frappe IV",            src: "https://www.chocolatenegro.info/contenidos/imagenes/Receta-de-caf%C3%A9-frapp%C3%A9-1200x900.jpg"},
            {title: "Frappe V",             src: "https://brainfoods.com.br/wp-content/uploads/2020/03/frappuccino-1.jpg"},
            {title: "Frappe VI",            src: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-frappe.jpg"},
        ],
        lattes: [
            {title: "Latte I",              src: "https://www.wallpapertip.com/wmimgs/193-1935054_latte-art-cappuccino-cup-wallpaper-latte-art.jpg"},
            {title: "Latte II",             src: "https://images.alphacoders.com/749/749235.jpg"},
            {title: "Latte III",            src: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm91cnxlbnwwfHwwfHw%3D&w=1000&q=80"},
            {title: "Latte IV",             src: "https://media.istockphoto.com/photos/cup-of-hot-chocolate-with-loveheart-latte-art-picture-id471788744?k=20&m=471788744&s=170667a&w=0&h=HPlE7gyPv2phmSu6BF0Yl6zDLBFPBCP8QwJ7MtWh4Sc="},
            {title: "Latte V",              src: "https://image-aws-us-west-2.vsco.co/4b61d0/179437579/5fa1a104a83e526c0326ba50/vsco5fa1a106a04b3.jpg"},
            {title: "Latte VI",             src: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGF0dGV8ZW58MHx8MHx8&w=1000&q=80"},
        ],
        mochas: [
            {title: "Mocha I",              src: "https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg"},
            {title: "Mocha II",             src: "https://www.starbucksathome.com/pt/sites/default/files/2021-06/10032021_CafeMocha_CS-min.png"},
            {title: "Mocha III",            src: "https://www.thespruceeats.com/thmb/Fh9f4uXLQUFGtGcgymrdyl2Uq3w=/1793x1345/smart/filters:no_upscale()/mocha-4797918-05-f664d7225d5a4b14abdeacd2bf48471f.jpg"},
            {title: "Mocha IV",             src: "https://static.parade.com/wp-content/uploads/2017/01/cafe-mocha-1.jpg"},
            {title: "Mocha V",              src: "https://perfectdailygrind.com/wp-content/uploads/2020/09/Mocha-4.jpg"},
            {title: "Mocha VI",             src: "http://www.cafesoldera.com.br/images/mocha.jpg"},
        ],
    
    certificates: [

        ]
    },
    mutations: {
        saveCoffeShop(state, name) {
            state.hub.coffeShop = name
        },

            
        },

    
    actions: {
        setCoffeShop({commit}, data) {
            commit("saveCoffeShop", data)
        },

        getApi({commit}) {
            axios.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=YOUR_API_KEY")
            .then((res) => {
                commit("saveApi", res.data.items[0])
    })
        }
            },
   
    getters: {
        countFrappes(state) {
            return state.frappes.length
        },
        countLattes(state) {
            return state.lattes.length
        },
        countMochas(state) {
            return state.mochas.length
        } 
    }
})