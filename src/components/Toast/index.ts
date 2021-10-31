import { App } from 'vue';
import component from './VToast.vue';

export default (app: App) => {
  app.component(component.name, component);
};
