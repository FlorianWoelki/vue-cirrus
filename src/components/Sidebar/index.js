import component from './VSidebar.vue';
import component2 from './VSidebarItem.vue';
import component3 from './VSidebarContent.vue';
import component4 from './VSidebarDropdown.vue';

export default (Vue) => {
  Vue.component(component.name, component);
  Vue.component(component2.name, component2);
  Vue.component(component3.name, component3);
  Vue.component(component4.name, component4);
};
