import { App } from 'vue';
import component from './VPlaceholder.vue';
import component2 from './VPlaceholderIcon.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component2.name, component2);
};
