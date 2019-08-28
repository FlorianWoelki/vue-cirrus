<template>
  <v-row level>
    <v-col c6>
      <v-code lang="Vue">
        <xmp v-html="code"></xmp>
      </v-code>
    </v-col>
    <v-col c6>
      <v-row>
        <v-col>
          <v-row>
            <v-col center c2>
              <v-btn primary>Primary</v-btn>
            </v-col>
            <v-col center c2>
              <v-btn transparent>Transparent</v-btn>
            </v-col>
            <v-col center c2>
              <v-btn light>Light</v-btn>
            </v-col>
            <v-col center c2>
              <v-btn dark>Dark</v-btn>
            </v-col>
            <v-col center c2>
              <v-btn black>Black</v-btn>
            </v-col>
            <v-col center c2>
              <v-btn info>Info</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col center>
          <v-row>
            <v-col center c3>
              <v-btn link>Link</v-btn>
            </v-col>
            <v-col center c3>
              <v-btn success>Success</v-btn>
            </v-col>
            <v-col center c3>
              <v-btn warning>Warning</v-btn>
            </v-col>
            <v-col center c3>
              <v-btn danger>Danger</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      code: `<v-btn primary>Primary</v-btn>
<v-btn transparent>Transparent</v-btn>
<v-btn light>Light</v-btn>
<v-btn dark>Dark</v-btn>
<v-btn black>Black</v-btn>
<v-btn info>Info</v-btn>
<v-btn link>Link</v-btn>
<v-btn success>Success</v-btn>
<v-btn warning>Warning</v-btn>
<v-btn danger>Danger</v-btn>`,
    };
  },
};
</script>
