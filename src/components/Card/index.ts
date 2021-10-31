import { App } from 'vue';
import component from './VCard.vue';
import component1 from './VCardActions.vue';
import component3 from './VCardFooter.vue';
import component4 from './VCardImage.vue';
import component5 from './VCardSubtitle.vue';
import component6 from './VCardTitle.vue';
import component7 from './VCardBody.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component1.name, component1);
  app.component(component3.name, component3);
  app.component(component4.name, component4);
  app.component(component5.name, component5);
  app.component(component6.name, component6);
  app.component(component7.name, component7);
};
