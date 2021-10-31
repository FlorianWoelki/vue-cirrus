import { App } from 'vue';
import component from './VCol.vue';
import component1 from './VRow.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component1.name, component1);
};
