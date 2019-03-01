<template>
  <v-sidebar>
    <v-sidebar-items title="Components" hoverEffect>
      <v-sidebar-item v-for="component in components" :key=component>
        {{component}}
      </v-sidebar-item>
      <v-divider />
      <v-sidebar-item>
        <v-sidebar-dropdown title="Mixins">
          <v-sidebar-item dropdown>Layout</v-sidebar-item>
          <v-sidebar-item dropdown>Tooltips</v-sidebar-item>
          <v-sidebar-item dropdown>Animations</v-sidebar-item>
        </v-sidebar-dropdown>
      </v-sidebar-item>
    </v-sidebar-items>
    <v-sidebar-content>
      <h3>Test</h3>
      <v-divider />

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Rerum ex, beatae veniam assumenda tempora totam quos
        consectetur reprehenderit vero animi odio autem, numquam
        laboriosam. Doloribus repudiandae autem illum architecto accusamus?
      </p>
    </v-sidebar-content>
  </v-sidebar>
</template>

<script>
export default {
  data() {
    return {
      components: ['Buttons', 'Cards', 'Dropdown', 'Frames', 'Grid',
        'Modals', 'Navbar', 'Pagination', 'Placeholder', 'Sidebar',
        'Tabs', 'Tiles', 'Avatars', 'Code', 'Dividers', 'Footer',
        'Links', 'NextPrev', 'Parallax', 'Snackbars', 'Spaces', 'Toasts',
        'Badges', 'Fullscreen'],
    };
  },
};
</script>
