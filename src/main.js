import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { CurvedBottomNavigation } from "bottom-navigation-vue";


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


Vue.use(VueSweetalert2);


Vue.use(CurvedBottomNavigation);

Vue.config.productionTip = false

Vue.mixin({
    data: function() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/",
        }
    }
})

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')