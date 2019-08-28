<template>
  <div class="demo">
    <v-row center>
      <v-col>
        <h1>Hello World Cirrus</h1>
        <v-divider short></v-divider>
        <v-btn link tooltipText="Hi">Testing</v-btn>
        <v-tag-container>
          <v-tag black>Version</v-tag>
          <v-tag info>0.5.5</v-tag>
          <v-tag closable warning></v-tag>
        </v-tag-container>
      </v-col>
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
