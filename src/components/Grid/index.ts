import { App } from 'vue';
import component from './VGrid.vue';

export default (app: App) => {
  app.component(component.name, component);
};
