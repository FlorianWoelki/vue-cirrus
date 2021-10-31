import { App } from 'vue';
import component from './VFooter.vue';
import component1 from './VFooterList.vue';
import component2 from './VFooterListItem.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component1.name, component1);
  app.component(component2.name, component2);
};
