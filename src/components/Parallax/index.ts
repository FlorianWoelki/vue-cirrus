import { App } from 'vue';
import component from './VParallax.vue';

export default (app: App) => {
  app.component(component.name, component);
};
