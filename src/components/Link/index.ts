import { App } from 'vue-demi';
import component from './VLink.vue';

export default (app: App) => {
  app.component(component.name, component);
};
