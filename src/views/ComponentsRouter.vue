<template>
  <Sidebar>
    <h1 class="font-thin">{{$route.params.name}}</h1>

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
