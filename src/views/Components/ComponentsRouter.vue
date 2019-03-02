<template>
  <Sidebar>
    <h3>{{$route.params.name}}</h3>

    <v-divider></v-divider>

    <component :is="currentView"></component>
  </Sidebar>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Buttons from '@/views/Components/Buttons/Buttons.vue';
import Cards from '@/views/Components/Cards/Cards.vue';

export default {
  components: {
    Sidebar,
    Cards,
    Buttons,
  },

  data() {
    return {
      currentView: 'Buttons',
    };
  },

  watch: {
    $route() {
      if (this.$route.params.name === 'Cards') {
        this.currentView = 'Cards';
      } else if (this.$route.params.name === 'Buttons') {
        this.currentView = 'Buttons';
      }
    },
  },
};
</script>
