import component from './VTile.vue';
import component2 from './VTileContent.vue';
import component3 from './VTileButtons.vue';

export default (Vue) => {
  Vue.component(component.name, component);
  Vue.component(component2.name, component2);
  Vue.component(component3.name, component3);
};
