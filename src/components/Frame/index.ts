import { App } from 'vue';
import component from './VFrame.vue';

export default (app: App) => {
  app.component(component.name, component);
};
