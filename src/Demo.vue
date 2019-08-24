<template>
  <div class="demo">
    <v-sidebar>
      <v-sidebar-items title="Components" hoverEffect>
        <v-sidebar-item></v-sidebar-item>
        <v-sidebar-item link="html">HTML</v-sidebar-item>
        <v-sidebar-item link="css">CSS</v-sidebar-item>
        <v-sidebar-item link="js">JS</v-sidebar-item>
        <v-sidebar-item link="c">C</v-sidebar-item>
        <v-sidebar-item>
          <v-sidebar-dropdown title="Mixins" showArrow>
            <v-sidebar-item dropdown>a</v-sidebar-item>
            <v-sidebar-item dropdown>b</v-sidebar-item>
            <v-sidebar-item dropdown>c</v-sidebar-item>
          </v-sidebar-dropdown>
        </v-sidebar-item>
      </v-sidebar-items>
      <v-sidebar-content>
        <div class="content">
          <v-row center>
            <v-col c4>
              <v-toast closable disableCloseFunction @click="test">Hello World</v-toast>
            </v-col>
          </v-row>

          <v-row center>
            <v-btn @click="test">Click me</v-btn>
          </v-row>

          <v-row center>
            <v-input-field icon>
              <span class="icon">1</span>
            </v-input-field>
          </v-row>

          <v-row center>
            <v-simple-card title="Card Title">
              <v-card-content>
                <p>This is some basic simple card text</p>
                <a href="#">#vue-cirrus</a>
                <a href="#">#cirrus</a>
              </v-card-content>
              <div class="card-footer level content">6:32 PM - 3 Jul 19</div>
              <v-card-buttons>
                <v-btn>Cancel</v-btn>
                <v-btn>Save</v-btn>
                <v-btn>Post</v-btn>
              </v-card-buttons>
            </v-simple-card>
            <v-simple-card
              title="Card Title"
              subtitle="by Elton John"
              image="assets/logo.png"
            >
              <v-card-content>
                <p>This is some basic simple card text</p>
                <a href="#">#vue-cirrus</a>
                <a href="#">#cirrus</a>
              </v-card-content>
              <div class="card-footer level content">6:32 PM - 3 Jul 19</div>
              <v-card-buttons>
                <v-btn>Cancel</v-btn>
                <v-btn>Save</v-btn>
                <v-btn>Post</v-btn>
              </v-card-buttons>
            </v-simple-card>
          </v-row>
        </div>
      </v-sidebar-content>
    </v-sidebar>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log(1);
    },
  },
};
</script>
