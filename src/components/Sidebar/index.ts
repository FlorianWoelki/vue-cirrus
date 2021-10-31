import { App } from 'vue';
import component from './VSidebar.vue';
import component2 from './VSidebarItem.vue';
import component3 from './VSidebarContent.vue';
import component4 from './VSidebarDropdown.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component2.name, component2);
  app.component(component3.name, component3);
  app.component(component4.name, component4);
};
