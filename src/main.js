import Vue from 'vue';
import VueCirrus from 'vue-cirrus';
import App from './App.vue';
import router from './router';
import store from './store/store';

import 'vue-cirrus/dist/vue-cirrus.css';

Vue.config.productionTip = false;

Vue.use(VueCirrus);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
