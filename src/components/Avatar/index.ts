import { App } from 'vue';
import component from './VAvatar.vue';

export default (app: App) => {
  app.component(component.name, component);
};
