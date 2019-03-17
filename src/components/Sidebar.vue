<template>
  <v-sidebar>
    <v-sidebar-items
      title="Components"
      hoverEffect
    >
      <v-sidebar-item
        v-for="component in components"
        :key=component
        :link="'#/components/' + component"
      >
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
      <slot></slot>
    </v-sidebar-content>
  </v-sidebar>
</template>

<script>
export default {
  data() {
    return {
      components: ['Buttons', 'Cards', 'Dropdown', 'Frames', 'Grid',
        'Modals', 'Navbars', 'Pagination', 'Forms', 'Placeholder', 'Sidebars',
        'Tabs', 'Tiles', 'Avatars', 'Code', 'Dividers', 'Footer',
        'Links', 'NextPrev', 'Parallax', 'Snackbars', 'Spaces', 'Toasts',
        'Badges', 'Fullscreen', 'Spinners'],
    };
  },
};
</script>
