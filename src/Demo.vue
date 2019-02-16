<template>
  <div class="demo">
    <v-row fluid wrap>
      <v-col c12 noSpace>
        <v-btn animated>Animated button</v-btn>
      </v-col>
      <v-col c12 noSpace>
        <v-btn animated btnStyle="accent">Animated accent button</v-btn>
      </v-col>
    </v-row>

    <v-bgroup filled>
      <v-btn btnStyle="accent">First</v-btn>
      <v-btn btnStyle="accent">Second</v-btn>
      <v-btn btnStyle="accent">Third</v-btn>
    </v-bgroup>
  </div>
</template>

<script>
export default {
  name: 'Demo',
};
</script>
