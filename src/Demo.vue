<template>
  <div class="demo">
    <v-row>
      <v-col c4>
        <v-btn animated center tooltipText="Hello World" tooltipBottomLeft>Animated button</v-btn>
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

    <v-code lang="java" keywords="int,float">
      System.out.println("integrated World");
      int test = 0;
      int hello = 1;
      float a = 1;
      System.out.println("Hello World");
    </v-code>

    <a href="#modal">
      <v-btn>Modal Dialog</v-btn>
    </a>
    <v-modal large zoomOut>
      <v-mbody>
        <h6>Hello Modal Dialog</h6>
      </v-mbody>
      <v-mfooter>
        <v-btn pullLeft>Close</v-btn>
        <v-btn pullRight btnStyle="accent">Share</v-btn>
      </v-mfooter>
    </v-modal>
  </div>
</template>

<script>
export default {
  name: 'Demo',
};
</script>
