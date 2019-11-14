<template>
  <v-row center class="code-example-section">
    <v-col c4>
      <v-code lang="HTML">
        <xmp v-html="htmlCodeExample"></xmp>
      </v-code>
    </v-col>
    <v-col c4>
      <v-code lang="JavaScript">
var testVar = 34;
let testLet = 34;
const testConst = 34;
if (testLet === 34) console.log(1);
      </v-code>
    </v-col>
    <v-col c4>
      <v-code lang="CSS">
h1 {
  display: none;
  visibility: hidden;
}
      </v-code>
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
</div>
`,
    };
  },
});
</script>
