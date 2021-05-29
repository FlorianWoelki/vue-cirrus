import { App } from 'vue';
import component from './VDivider.vue';

export default (app: App) => {
  app.component(component.name, component);
};
