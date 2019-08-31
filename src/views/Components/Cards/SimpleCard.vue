<template>
  <v-row level>
    <v-col c6>
      <v-code lang="Vue">
        <xmp v-html="code"></xmp>
      </v-code>
    </v-col>
    <v-col c6 center style="margin-top: 30px;">
      <v-simple-card style="min-width:100%;" title="Card Title">
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      code: `<v-simple-card title="Card Title" style="min-width:100%;">
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
</v-simple-card>`,
    };
  },
};
</script>
