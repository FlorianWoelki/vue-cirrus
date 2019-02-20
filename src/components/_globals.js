import Vue from 'vue';

const requireComponent = require.context('.', true, /V[\w-]+.vue$/);

requireComponent.keys().forEach((filename) => {
  const componentConfig = requireComponent(filename);
  const componentName = `${filename.replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .replace(/(.+)\//, '')
    .toLowerCase()
    .replace('v', 'v-')}`;

  Vue.component(componentName, componentConfig.default || componentConfig);
});

export default Vue;
