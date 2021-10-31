import { App } from 'vue';
import component from './VHeadline.vue';

export default (app: App) => {
  app.component(component.name, component);
};
