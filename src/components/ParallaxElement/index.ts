import { App } from 'vue-demi';
import component from './VParallaxElement.vue';

export default (app: App) => {
  app.component(component.name, component);
};
