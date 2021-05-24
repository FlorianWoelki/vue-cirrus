import { App } from 'vue';
import component from './VTag.vue';
import component2 from './VTagContainer.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component2.name, component2);
};
