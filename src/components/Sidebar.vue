<template>
  <v-sidebar hoverEffect noPadding>
    <template slot:brandTitle>
      <h5 style="padding: .25rem 1.5rem;">Components</h5>
      <v-space></v-space>
    </template>
    <div
      v-for="component in sortedComponentList"
      :key=component
    >
      <v-sidebar-item
        :href="'#/components/' + component"
        :selected="currentRouteName === component"
        v-if="component !== 'Forms'"
      >
        <span  style="padding: .25rem 1.5rem;">{{component}}</span>
      </v-sidebar-item>
      <v-sidebar-dropdown v-else showArrow title="Forms" style="padding-left: 0.8rem;">
        <v-sidebar-item
          v-for="formComponent in formComponents"
          :key="formComponent"
          :selected="currentRouteName === formComponent"
          dropdown
          :href="'#/components/' + formComponent"
        >{{ formComponent }}</v-sidebar-item>
      </v-sidebar-dropdown>
    </div>
    <div class="divider"></div>
    <v-sidebar-dropdown
      id="mixins-dropdown"
      showArrow
      title="Mixins"
      style="padding-left: 0.8rem;"
    >
      <v-sidebar-item
        dropdown
        href="#/components/Animations"
        :selected="currentRouteName === 'Animations'"
      >Animations</v-sidebar-item>
      <v-sidebar-item
        dropdown
        href="#/components/Tooltips"
        :selected="currentRouteName === 'Tooltips'"
      >Tooltips</v-sidebar-item>
    </v-sidebar-dropdown>
    <div class="divider"></div>
    <template v-slot:content>
      <v-sidebar-content>
        <slot></slot>
      </v-sidebar-content>
    </template>
  </v-sidebar>
</template>

<script>
export default {
  data() {
    return {
      components: ['Buttons', 'Cards', 'Frames', 'Grid', 'Headlines',
        'Modals', 'Navbars', 'Pagination', 'Forms', 'Placeholder', 'Sidebars',
        'Tabs', 'Tags', 'Tiles', 'Avatars', 'Code', 'Dividers', 'Footer',
        'Links', 'NextPrev', 'Parallax', 'Snackbars', 'Spaces', 'Toasts',
        'Badges', 'Menus', 'ParallaxElements'],
      formComponents: ['Checkbox', 'DatePicker', 'FormGroup', 'InputColor',
        'InputField', 'Label', 'RadioBtn', 'SearchBar', 'TextArea', 'Toggler'],
    };
  },

  computed: {
    currentRouteName() {
      return this.$route.path.split('/')[2];
    },
    sortedComponentList() {
      return this.components.slice().sort();
    },
    isDarkMode() {
      return this.$store.getters.isDarkMode.darkMode;
    },
  },
};
</script>

<style lang="scss">
.tree-nav-body.dark {
  color: #fafafa;
  background: #373737;
}
.tree-nav-body.dark #sidebar {
  background: #303030 !important;

  .sidebar-link {
    color: #fafafa;
  }
  .sidebar-link:hover {
    color: black;
  }
}
</style>
