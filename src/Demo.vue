<template>
  <div class="demo">
    <v-sidebar>
      <v-sidebar-items
        title="Hello"
        hoverEffect
      >
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
        <v-container>
          <v-row>
            <v-drop-caps letterColor="purple">
              Lorem ipsum dolor sit,
              amet consectetur adipisicing elit.
              Quasi rerum voluptates ad soluta doloribus natus,
              unde ipsa vel officia excepturi incidunt quidem
              ipsum consequatur? Nisi totam dolorem a fugit itaque.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus molestiae eveniet tempore nihil, error facere?
              Possimus quod atque unde ea tempore, deserunt quo voluptates
              minus, repudiandae commodi fuga placeat optio?
            </v-drop-caps>
          </v-row>
        </v-container>
      </v-sidebar-content>
    </v-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      snackbar: false,
      code: `<xmp><div>Helo World</div>
<h1 class="Hello World">Hello World</h1></xmp>`,
    };
  },
};
</script>
