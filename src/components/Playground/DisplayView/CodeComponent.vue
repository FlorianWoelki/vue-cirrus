<template>
  <div class="code-component">
    <v-code lang="Vue" copyable>
      <xmp v-html="code"></xmp>
    </v-code>
  </div>
</template>

<script>
export default {
  props: ['propsData', 'component', 'disableMessage', 'customCode'],
  data() {
    return {
      code: this.getCode(),
    };
  },

  methods: {
    getCode() {
      if (this.customCode) {
        return this.customCode;
      }

      let validProps = '';
      let length = 0;
      Object.entries(this.propsData).forEach((entry) => {
        if ((entry[0] === 'position' || entry[0] === 'size'
          || entry[0] === 'color' || entry[0] === 'title'
          || entry[0] === 'lang' || entry[0] === 'text'
          || entry[0] === 'tooltipText' || entry[0] === 'content'
          || entry[0] === 'src' || entry[0] === 'subtitle'
          || entry[0] === 'placeholder' || entry[0] === 'animation') && entry[1] !== '') {
          validProps += `\n  ${entry[0]}="${entry[1]}"`;
          length += 1;
        } else if (entry[1] === true) {
          validProps += `\n  ${entry[0]}`;
          length += 1;
        } else if (entry[1] !== null && entry[1] !== '' && entry[1] !== false) {
          validProps += `\n  ${entry[1]}`;
          length += 1;
        }
      });

      if (length > 0) {
        validProps += '\n';
      }

      return `<${this.component}${validProps}>
${!this.disableMessage ? '  Customize Me' : ''}
</${this.component}>`;
    },
  },
};
</script>

<style>
.code-component code {
  padding-bottom: 0;
}
</style>
