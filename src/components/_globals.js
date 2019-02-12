import Vue from 'vue';
import TestComponent from './TestComponent.vue';

const Components = {
  TestComponent,
};

Object.keys(Components).forEach(name => Vue.component(name, Components[name]));

export default Components;
