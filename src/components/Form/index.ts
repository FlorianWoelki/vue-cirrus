import { App } from 'vue';
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

export default (app: App) => {
  app.component(component.name, component);
  app.component(component1.name, component1);
  app.component(component2.name, component2);
  app.component(component3.name, component3);
  app.component(component4.name, component4);
  app.component(component5.name, component5);
  app.component(component6.name, component6);
  app.component(component7.name, component7);
  app.component(component8.name, component8);
  app.component(component9.name, component9);
};
