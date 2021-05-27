import { App } from 'vue';
import component from './VModal.vue';

export default (app: App) => {
  app.component(component.name, component);
};
