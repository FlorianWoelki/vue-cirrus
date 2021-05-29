import { App } from 'vue-demi';
import component from './VBadge.vue';

export default (app: App) => {
  app.component(component.name, component);
};
