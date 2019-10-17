<template>
  <div class="code-component">
    <v-code lang="Vue" copyable>
      <xmp v-html="code"></xmp>
    </v-code>
    <p>{{color}}</p>
  </div>
</template>

<script>
export default {
  props: ['outline', 'color', 'size', 'loading'],
  data() {
    return {
      code: `
<v-btn ${(this.outline ? '\n  outline' : '')}${(this.color !== '' ? `\n  ${this.color}` : '')}${(this.size !== '' ? `\n  ${this.size}` : '')}${(this.loading !== '' ? `\n  ${this.loading}` : '')}
>
  Customize Me
</v-btn>`,
    };
  },
};
</script>
