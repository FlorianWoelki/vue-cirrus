import component from './VCheckbox.vue';
import component1 from './VDatePicker.vue';
import component2 from './VFormGroup.vue';
import component3 from './VInputColor.vue';
import component4 from './VInputField.vue';
import component5 from './VLabel.vue';
import component6 from './VRadioBtn.vue';
import component7 from './VSearchBar.vue';
import component8 from './VTextArea.vue';
import component9 from './VToggle.vue';

export default (Vue: any) => {
  Vue.component(component.name, component);
  Vue.component(component1.name, component1);
  Vue.component(component2.name, component2);
  Vue.component(component3.name, component3);
  Vue.component(component4.name, component4);
  Vue.component(component5.name, component5);
  Vue.component(component6.name, component6);
  Vue.component(component7.name, component7);
  Vue.component(component8.name, component8);
  Vue.component(component9.name, component9);
};
