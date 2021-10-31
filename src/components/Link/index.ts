import { App } from 'vue';
import component from './VLink.vue';

export default (app: App) => {
  app.component(component.name, component);
};
