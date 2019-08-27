<template>
  <div class="demo">
    <h1>test</h1>
    <v-divider></v-divider>
    <v-tag-container>
      <v-tag black>Version</v-tag>
      <v-tag info>0.5.5</v-tag>
      <v-tag closable warning></v-tag>
    </v-tag-container>
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
