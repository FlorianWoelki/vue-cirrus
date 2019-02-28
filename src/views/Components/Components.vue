<template>
  <v-sidebar>
    <v-sidebar-items title="Components" hoverEffect>
      <v-sidebar-item v-for="component in components" :key=component>
        {{component}}
      </v-sidebar-item>
      <v-divider />
      <v-sidebar-item>
        <input type="checkbox" id="mixins" class="hide" name="mixinsTree">
        <label for="mixins" class="tree-item-header">
          <span class="icon">
            <i class="fa fa-chevron-right small" aria-hidden="true"></i>
          </span>
          Mixins
        </label>
        <div class="tree-item-body">
          <ul class="menu">
            <li class="menu-item">
              <a>Layout</a>
            </li>
            <li class="menu-item">
              <a>Tooltips</a>
            </li>
            <li class="menu-item">
              <a>Animations</a>
            </li>
          </ul>
        </div>
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
        'Links', 'NextPrev', 'Parallax', 'Snackbars', 'Spaces', 'Toasts'],
    };
  },
};
</script>
