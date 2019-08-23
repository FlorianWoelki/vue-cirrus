<template>
  <div class="demo">
    <v-navbar
      dark
    >
      <div class="nav-center">
        <v-navbar-item href="#" @click="test">hello</v-navbar-item>
        <v-navbar-item>world</v-navbar-item>
        <v-navbar-item>without</v-navbar-item>
        <v-navbar-item>knowing</v-navbar-item>
        <v-navbar-item>it</v-navbar-item>
      </div>
    </v-navbar>

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
