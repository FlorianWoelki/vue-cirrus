import component from './VNavbar.vue';
import component2 from './VNavbarItem.vue';
import component3 from './VNavDropdown.vue';
import component4 from './VNavDropdownItem.vue';
import component5 from './VNavRegion.vue';

export default (Vue) => {
  Vue.component(component.name, component);
  Vue.component(component2.name, component2);
  Vue.component(component3.name, component3);
  Vue.component(component4.name, component4);
  Vue.component(component5.name, component5);
};
