import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import router from './router'
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
