import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import Components from './views/Components.vue';
import ComponentsRouter from './views/ComponentsRouter.vue';

Vue.use(Router);

// Load all component views
const requireComponent = require.context('@/views/Components/', true, /V[\w-]+.vue$/);
requireComponent.keys().forEach((filename) => {
  const componentConfig = requireComponent(filename);
  const componentName = `${filename.replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .replace(/(.+)\//, '')
    .replace('V', '')}`;

  Vue.component(componentName, componentConfig.default || componentConfig);
});

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
