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
import Snackbars from '@/views/Components/Snackbars/Snackbars.vue';

export default {
  components: {
    Sidebar,
    Cards,
    Buttons,
    Snackbars,
  },

  data() {
    return {
      currentView: this.$route.params.name,
    };
  },

  watch: {
    $route() {
      if (this.$route.params.name === 'Cards') {
        this.currentView = 'Cards';
      } else if (this.$route.params.name === 'Buttons') {
        this.currentView = 'Buttons';
      } else if (this.$route.params.name === 'Snackbars') {
        this.currentView = 'Snackbars';
      }
    },
  },
};
</script>
