import component from './VFooter.vue';
import component1 from './VFooterList.vue';
import component2 from './VFooterListItem.vue';

export default (Vue: any) => {
  Vue.component(component.name, component);
  Vue.component(component1.name, component1);
  Vue.component(component2.name, component2);
};
