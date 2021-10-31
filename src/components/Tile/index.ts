import { App } from 'vue';
import component from './VTile.vue';
import component2 from './VTileContent.vue';
import component3 from './VTileButtons.vue';

export default (app: App) => {
  app.component(component.name, component);
  app.component(component2.name, component2);
  app.component(component3.name, component3);
};
