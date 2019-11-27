<template>
  <v-sidebar :class="isDarkMode ? 'dark' : ''">
    <v-sidebar-items
      title="Components"
      hoverEffect
    >
      <v-sidebar-item
        v-for="component in sortedComponentList"
        :key=component
        :href="'#/components/' + component"
      >
        {{component}}
      </v-sidebar-item>
      <div class="divider"></div>
      <v-sidebar-item>
        <v-sidebar-dropdown showArrow title="Mixins">
          <v-sidebar-item
            dropdown
            href="#/components/Animations"
          >Animations</v-sidebar-item>
          <v-sidebar-item
            dropdown
            href="#/components/Layout"
          >Layout</v-sidebar-item>
          <v-sidebar-item
            dropdown
            href="#/components/Tooltips"
          >Tooltips</v-sidebar-item>
        </v-sidebar-dropdown>
      </v-sidebar-item>
      <div class="divider"></div>
      <v-sidebar-item href="#/components/Util">
        Util
      </v-sidebar-item>
    </v-sidebar-items>
    <v-sidebar-content>
      <!--<ChangeMode />-->
      <slot></slot>
    </v-sidebar-content>
  </v-sidebar>
</template>

<script>
// import ChangeMode from '@/components/ChangeMode.vue';

export default {
  /*
  components: {
    ChangeMode,
  },
  */

  data() {
    return {
      components: ['Buttons', 'Cards', 'Frames', 'Grid', 'Headlines',
        'Modals', 'Navbars', 'Pagination', 'Forms', 'Placeholder', 'Sidebars',
        'Tabs', 'Tags', 'Tiles', 'Avatars', 'Code', 'Dividers', 'Footer',
        'Links', 'NextPrev', 'Parallax', 'Snackbars', 'Spaces', 'Toasts',
        'Badges', 'Fullscreen'],
    };
  },

  computed: {
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
