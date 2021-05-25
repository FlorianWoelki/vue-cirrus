import { App } from 'vue';
import component from './VSpace.vue';

export default (app: App) => {
  app.component(component.name, component);
};
