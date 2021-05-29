import { App } from 'vue-demi';
import component from './VFrame.vue';

export default (app: App) => {
  app.component(component.name, component);
};
