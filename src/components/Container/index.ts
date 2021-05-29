import { App } from 'vue-demi';
import component from './VContainer.vue';

export default (app: App) => {
  app.component(component.name, component);
};
