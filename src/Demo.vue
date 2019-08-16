<template>
  <div class="demo">
    <v-navbar
      dark
    >
      <div class="nav-center">
        <v-navbar-item href="#" @click="console.log(1)">hello</v-navbar-item>
        <v-navbar-item>world</v-navbar-item>
        <v-navbar-item>without</v-navbar-item>
        <v-navbar-item>knowing</v-navbar-item>
        <v-navbar-item>it</v-navbar-item>
      </div>
    </v-navbar>

    <v-row fluid>
      <v-col fluid>test</v-col>
      <v-col fluid>test</v-col>
      <v-col fluid>test</v-col>
      <v-col fluid>test</v-col>
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
