import { App } from 'vue-demi';
import component from './VPagination.vue';
import component2 from './VPaginationItem.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component2.name, component2);
};
