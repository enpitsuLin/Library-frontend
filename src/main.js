import Vue from 'vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';


Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
