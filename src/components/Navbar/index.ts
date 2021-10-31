import { App } from 'vue';
import component from './VNavbar.vue';
import component2 from './VNavbarItem.vue';
import component3 from './VNavDropdown.vue';
import component4 from './VNavDropdownItem.vue';
import component5 from './VNavRegion.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component2.name, component2);
  app.component(component3.name, component3);
  app.component(component4.name, component4);
  app.component(component5.name, component5);
};
