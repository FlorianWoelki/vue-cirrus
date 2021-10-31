import { App } from 'vue';
import component from './VBtn.vue';
import component1 from './VBtnGroup.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component1.name, component1);
};
