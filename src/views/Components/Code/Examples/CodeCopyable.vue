<template>
  <v-row class="code-example-section">
    <v-col c="4">
      <v-code lang="HTML" copyable>
        <xmp v-html="htmlCodeExample"></xmp>
      </v-code>
    </v-col>
    <v-col c="4">
      <v-code lang="JavaScript" copyable>{{ jsCodeExample }}</v-code>
    </v-col>
    <v-col c="4">
      <v-code lang="CSS" copyable>{{ cssCodeExample }}</v-code>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CodeLanguages',

  data() {
    return {
      htmlCodeExample: `
<div class="hello-world">
  <h1>This is a simple test</h1>
  <p>Testing something...</p>
</div>`,
      jsCodeExample: `
var testVar = 34;
let testLet = 34;
const testConst = 34;
if (testLet === 34) console.log(1);`,
      cssCodeExample: `
h1 {
  display: none;
  visibility: hidden;
}`,
    };
  },
});
</script>
