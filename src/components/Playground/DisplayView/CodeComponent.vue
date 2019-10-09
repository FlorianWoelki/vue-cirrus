<template>
  <v-code lang="Vue" copyable>
    <xmp v-html="code"></xmp>
  </v-code>
</template>

<script>
export default {
  props: ['outline', 'color', 'size', 'loading'],
  data() {
    return {
      code: `<v-btn
  ${(this.outline ? 'outline' : '')}
  ${(this.color !== 'none' ? this.color : '')}
  ${(this.size !== 'none' ? this.size : '')}
  ${(this.loading !== 'none' ? this.loading : '')}
>
Customize Me
</v-btn>`,
    };
  },
};
</script>
