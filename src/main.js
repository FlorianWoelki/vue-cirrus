import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './components';
import 'vue-cirrus/dist/vue-cirrus.css';
import 'vue-cirrus';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
