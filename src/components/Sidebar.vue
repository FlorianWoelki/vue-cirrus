<template>
  <v-sidebar hoverEffect noPadding>
    <template slot:brandTitle>
      <h5 style="padding: .25rem 1.5rem;">Components</h5>
      <v-space></v-space>
    </template>
    <v-sidebar-item
      v-for="component in sortedComponentList"
      :key=component
      :href="'#/components/' + component"
      :selected="currentRouteName === component"
    >
      <span v-if="component !== 'Forms'" style="padding: .25rem 1.5rem;">{{component}}</span>
      <v-sidebar-dropdown v-else showArrow title="Forms"  style="padding: .25rem 1.25rem;">
        <v-sidebar-item
          dropdown
          href="#/components/Checkbox"
        >Checkbox</v-sidebar-item>
      </v-sidebar-dropdown>
    </v-sidebar-item>
    <div class="divider"></div>
    <v-sidebar-item>
      <v-sidebar-dropdown showArrow title="Mixins" style="padding: .25rem 1.25rem;">
        <v-sidebar-item
          dropdown
          href="#/components/Animations"
        >Animations</v-sidebar-item>
        <v-sidebar-item
          dropdown
          href="#/components/Tooltips"
        >Tooltips</v-sidebar-item>
      </v-sidebar-dropdown>
    </v-sidebar-item>
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
