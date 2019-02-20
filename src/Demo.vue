<template>
  <div class="demo">
    <v-tabs>
      <v-tab>Test 1</v-tab>
      <v-tab link="#">Test 2</v-tab>
      <v-tab>Test 3</v-tab>
      <v-tab selected>Test 4</v-tab>
    </v-tabs>

    <v-row>
      <v-col o4 c4>
        <v-card animated title="Title" subtitle="Subtitle" footerText="Footer text">
          <v-ccontent>
            <p>Located two hours south of Sydney in the Southern Highland of New South Wales...</p>
          </v-ccontent>
        </v-card>
      </v-col>
    </v-row>

    <v-avatar large text="fw"></v-avatar>

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

      console.log('Testing');
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

    <v-toast tooltipText="Hello">Testing</v-toast>
  </div>
</template>

<script>
export default {
  name: 'Demo',
};
</script>
