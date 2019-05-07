<template>
  <section class="sidebars-component">
    <h5>Sidebars</h5>
    <p>Easily create full responsive sidebars!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 125px;"
      >
        <p>Preview is available on the left side.</p>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data="props" />

    <v-space
      xlarge
      v-for="i in 2"
      :key="i"
    />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';

export default {
  components: {
    API,
  },

  data() {
    return {
      code: `<v-sidebar>
  <v-sidebar-items title="Components" hoverEffect>
    <v-sidebar-item></v-sidebar-item>
    <v-sidebar-item link="html">HTML</v-sidebar-item>
    <v-sidebar-item link="css">CSS</v-sidebar-item>
    <v-sidebar-item link="js">JS</v-sidebar-item>
    <v-sidebar-item link="c">C</v-sidebar-item>
    <v-sidebar-item>
      <v-sidebar-dropdown title="Mixins">
        <v-sidebar-item dropdown>a</v-sidebar-item>
        <v-sidebar-item dropdown>b</v-sidebar-item>
        <v-sidebar-item dropdown>c</v-sidebar-item>
      </v-sidebar-dropdown>
    </v-sidebar-item>
  </v-sidebar-items>
  <v-sidebar-content>
    <div class="content">...</div>
  </v-sidebar-content>
</v-sidebar>`,
      props: {
        title: ['title', 'empty', 'String', '(SidebarItems/SidebarDropdown) Title for this component'],
        hoverEffect: ['hoverEffect', 'false', 'Boolean', '(SidebarItems) Apply hover effect'],
        link: ['link', '#', 'String', '(SidebarItem) Link for this item'],
        forId: ['forId', 'treeitem', 'String', '(SidebarItem) For label id'],
        dropdown: ['dropdown', 'false', 'Boolean', '(SidebarItem) If item is dropdown menu'],
      },
    };
  },
};
</script>
