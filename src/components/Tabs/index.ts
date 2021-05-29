import { App } from 'vue-demi';
import component from './VTab.vue';
import component2 from './VTabs.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component2.name, component2);
};
