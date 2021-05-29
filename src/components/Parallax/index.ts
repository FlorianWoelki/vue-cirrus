import { App } from 'vue-demi';
import component from './VParallax.vue';

export default (app: App) => {
  app.component(component.name, component);
};
