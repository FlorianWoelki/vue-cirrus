import { App } from 'vue';
import component from './VBadge.vue';

export default (app: App) => {
  app.component(component.name, component);
};
