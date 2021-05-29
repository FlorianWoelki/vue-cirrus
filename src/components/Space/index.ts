import { App } from 'vue-demi';
import component from './VSpace.vue';

export default (app: App) => {
  app.component(component.name, component);
};
