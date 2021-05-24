import component from './VMenu.vue';
import component2 from './VMenuDivider.vue';
import component3 from './VMenuItem.vue';

export default (Vue: any) => {
  Vue.component(component.name, component);
  Vue.component(component2.name, component2);
  Vue.component(component3.name, component3);
};
