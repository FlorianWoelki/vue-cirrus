import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import Components from './views/Components/Components.vue';
import ComponentsRouter from './views/Components/ComponentsRouter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/components',
      name: 'components',
      component: Components,
    },
    {
      path: '/components/:name',
      component: ComponentsRouter,
    },
  ],
});
