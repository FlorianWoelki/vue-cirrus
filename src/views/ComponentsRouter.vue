<template>
  <Sidebar>
    <h3>{{$route.params.name}}</h3>

    <v-divider></v-divider>

    <component :is="currentView"></component>
  </Sidebar>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

import components from '../components';

export default {
  components: {
    Sidebar,
  },

  data() {
    return {
      currentView: this.$route.params.name,
    };
  },

  watch: {
    $route() {
      components.components.forEach((component) => {
        if (this.$route.params.name === component) {
          this.currentView = component;
        }
      });
    },
  },
};
</script>
