import Vue from 'vue';

const requireComponent = require.context('@/views/Components/', true, /V[\w-]+.vue$/);

requireComponent.keys().forEach((filename) => {
  const componentConfig = requireComponent(filename);
  const componentName = `${filename.replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .replace(/(.+)\//, '')
    .replace('V', '')}`;

  Vue.component(componentName, componentConfig.default || componentConfig);
});

export default Vue;
