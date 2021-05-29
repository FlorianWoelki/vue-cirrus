import { App } from 'vue';
import component from './VDropdown.vue';
import component1 from './VDropdownItem.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component1.name, component1);
};
