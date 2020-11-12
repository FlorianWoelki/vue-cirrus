import component from './VCard.vue';
import component1 from './VCardActions.vue';
import component3 from './VCardFooter.vue';
import component4 from './VCardImage.vue';
import component5 from './VCardSubtitle.vue';
import component6 from './VCardTitle.vue';

export default (Vue) => {
  Vue.component(component.name, component);
  Vue.component(component1.name, component1);
  Vue.component(component3.name, component3);
  Vue.component(component4.name, component4);
  Vue.component(component5.name, component5);
  Vue.component(component6.name, component6);
};
