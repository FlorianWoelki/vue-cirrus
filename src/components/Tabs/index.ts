import { App } from 'vue';
import component from './VTab.vue';
import component2 from './VTabs.vue';

export default (Vue: App) => {
  Vue.component(component.name, component);
  Vue.component(component2.name, component2);
};
