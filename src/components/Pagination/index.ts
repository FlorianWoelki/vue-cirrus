import component from './VPagination.vue';
import component2 from './VPaginationItem.vue';

export default (Vue: any) => {
  Vue.component(component.name, component);
  Vue.component(component2.name, component2);
};
