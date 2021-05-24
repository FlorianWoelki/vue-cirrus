import component from './VPlaceholder.vue';
import component2 from './VPlaceholderIcon.vue';

export default (Vue: any) => {
  Vue.component(component.name, component);
  Vue.component(component2.name, component2);
};
