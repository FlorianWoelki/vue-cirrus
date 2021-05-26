import { App } from 'vue';
import component from './VSnackbar.vue';

export default (app: App) => {
  app.component(component.name, component);
};
