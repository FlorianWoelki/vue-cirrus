<template>
  <div class="demo">
    <v-row>
      <v-col c4>
        <v-btn animated center>Animated button</v-btn>
      </v-col>
      <v-col c4>
        <v-btn animated btnStyle="accent">Animated accent button</v-btn>
      </v-col>
      <v-col c4>
        <v-btn animated loadingLeft>Loading Button</v-btn>
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

    <v-code lang="java">
      System.out.println("Hello World");
    </v-code>
  </div>
</template>

<script>
export default {
  name: 'Demo',
};
</script>
