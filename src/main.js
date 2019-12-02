import VueJs from 'vue';
import App from './App.vue';

const install = (Vue) => {
  const requireComponent = require.context('./components', true, /V[\w-]+.vue$/);

  requireComponent.keys().forEach((filename) => {
    const componentConfig = requireComponent(filename);
    const componentName = `${filename.replace(/^\.\//, '')
      .replace(/\.\w+$/, '')
      .replace(/(.+)\//, '')
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .replace('v', 'v-')}`;

    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

install(VueJs);

new VueJs({
  render: h => h(App),
}).$mount('#app');

export default install;
