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

    <v-row>
      <v-col c2>
        <v-link>Ordinary Link</v-link>
      </v-col>
      <v-col c2>
        <v-link ltr>Hover Link</v-link>
      </v-col>
      <v-col c2>
        <v-link squared>Squared Link</v-link>
      </v-col>
      <v-col c2>
        <v-link dSquared>Delayed Squared Link</v-link>
      </v-col>
      <v-col c2>
        <v-link c>Center Link</v-link>
      </v-col>
      <v-col c2>
        <v-link oc>Opposite Center Link</v-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Demo',
};
</script>
