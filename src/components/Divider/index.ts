import { App } from 'vue-demi';
import component from './VDivider.vue';

export default (app: App) => {
  app.component(component.name, component);
};
