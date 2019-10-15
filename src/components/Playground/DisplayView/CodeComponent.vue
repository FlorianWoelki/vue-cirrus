<template>
  <div class="code-component">
    <v-code lang="Vue" copyable>
      <xmp v-html="code"></xmp>
    </v-code>
  </div>
</template>

<script>
export default {
  props: ['outline', 'color', 'size', 'loading'],
  data() {
    return {
      code: `
<v-btn ${(this.outline ? '\n  outline' : '')}${(this.color !== 'none' ? `\n  ${this.color}` : '')}${(this.size !== 'none' ? `\n  ${this.size}` : '')}${(this.loading !== 'none' ? `\n  ${this.loading}` : '')}
>
Customize Me
</v-btn>`,
    };
  },
};
</script>
