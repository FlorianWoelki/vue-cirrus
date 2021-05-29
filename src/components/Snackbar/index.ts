import { App } from 'vue-demi';
import component from './VSnackbar.vue';

export default (app: App) => {
  app.component(component.name, component);
};
