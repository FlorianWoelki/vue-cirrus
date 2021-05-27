import { App } from 'vue';
import component from './VNextBtn.vue';
import component2 from './VNextPrev.vue';
import component3 from './VPrevBtn.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component2.name, component2);
  app.component(component3.name, component3);
};
