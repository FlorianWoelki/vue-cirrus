<template>
  <div class="demo">
    <v-sidebar>
      <v-sidebar-items title="Hello" hoverEffect>
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
            <v-col c6>
              <v-code lang="javascript" copyable>function(test) {
  console.log("Hello World");
}
              </v-code>
            </v-col>
            <v-col c6>
              <h2>testest</h2>
              <v-btn accent>Test</v-btn>
            </v-col>
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
