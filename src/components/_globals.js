import Vue from 'vue';
import '@/prism.min.css';
import '@/code-style.css';

const requireComponent = require.context('.', true, /V[\w-]+.vue$/);

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

export default Vue;
