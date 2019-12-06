import component from './VTag.vue';
import component2 from './VTagContainer.vue';

export default (Vue) => {
  Vue.component(component.name, component);
  Vue.component(component2.name, component2);
};
