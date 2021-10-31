import { App } from 'vue';
import component from './VMenu.vue';
import component2 from './VMenuDivider.vue';
import component3 from './VMenuItem.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component2.name, component2);
  app.component(component3.name, component3);
};
