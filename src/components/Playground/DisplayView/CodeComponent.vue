<template>
  <v-code lang="Vue" copyable>
    <xmp v-html="code"></xmp>
  </v-code>
</template>

<script>
export default {
  data() {
    return {
      code: `<v-btn>
Customize Me
</v-btn>`,
    };
  },
};
</script>
