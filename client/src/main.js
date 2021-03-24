import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import router from './router'
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
