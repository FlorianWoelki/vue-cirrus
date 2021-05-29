import { App } from 'vue';
import component from './VContainer.vue';

export default (app: App) => {
  app.component(component.name, component);
};
