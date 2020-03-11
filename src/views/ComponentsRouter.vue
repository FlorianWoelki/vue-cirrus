<template>
  <Sidebar>
    <h1 class="font-thin">
      <v-link
        :href="`https://github.com/FlorianWoelki/vue-cirrus/tree/gh-pages/src/views/Components/${isComponentForm($route.params.name)}`"
        blank
      >#</v-link>
      {{$route.params.name}}

      <router-link to="/" style="float: right">
        <i class="fas fa-home"></i>
      </router-link>
    </h1>

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
      formComponents: ['Checkbox', 'DatePicker', 'FormGroup', 'InputColor',
        'InputField', 'Label', 'RadioBtn', 'SearchBar', 'TextArea', 'Toggler'],
    };
  },

  methods: {
    isComponentForm(component) {
      return this.formComponents.filter(c => component === c).length !== 0 ? 'Forms/' : component;
    },
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

<style>
.fas.fa-home {
  font-size: 34px;
}

.fix-text-overflow {
  margin-right: 25%;
}
</style>
