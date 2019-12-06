import component from './VTile.vue';
import component2 from './VTileContent.vue';

export default (Vue) => {
  Vue.component(component.name, component);
  Vue.component(component2.name, component2);
};
