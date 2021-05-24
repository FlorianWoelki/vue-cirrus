import component from './VBtn.vue';
import component1 from './VBtnGroup.vue';

export default (Vue: any) => {
  Vue.component(component.name, component);
  Vue.component(component1.name, component1);
};
