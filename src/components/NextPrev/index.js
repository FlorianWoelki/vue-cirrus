import component from './VNextBtn.vue';
import component2 from './VNextPrev.vue';
import component3 from './VPrevBtn.vue';

export default (Vue) => {
  Vue.component(component.name, component);
  Vue.component(component2.name, component2);
  Vue.component(component3.name, component3);
};
