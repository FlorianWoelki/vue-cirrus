<template>
  <pre>
    <code
      :data-lang="lang"
      :class="classes"
    >{{ value }}</code>
  </pre>
</template>

<script>
import javascript from './javascript';
import html from './html';
import css from './css';
import bash from './bash';

export default {
  data() {
    return {
      copied: false,
    };
  },

  props: {
    value: String,
    lang: String,
    dark: Boolean,
  },

  watch: {
    value(newVal) {
      this.$el.getElementsByTagName('code')[0].innerHTML = this.colorizeValue(newVal);
    },
  },

  methods: {
    replaceWithColoredCode(codeElements, lang) {
      let newColoredElements = codeElements;
      Object.keys(lang).forEach((key) => {
        newColoredElements = newColoredElements.replace(lang[key].exp, `<span class="${lang[key].class}">$&</span>`);
      });
      return newColoredElements;
    },
    colorizeValue(codeElements) {
      let result = codeElements;

      if (this.lang.toLowerCase() === 'javascript') {
        result = this.replaceWithColoredCode(codeElements, javascript);
      } else if (this.lang.toLowerCase() === 'html' || this.lang.toLowerCase() === 'vue') {
        result = codeElements.replace('<xmp>', '').replace('</xmp>', '');
        result = codeElements.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&lt;br&gt;/g, '<br />');
        result = this.replaceWithColoredCode(result, html);
      } else if (this.lang.toLowerCase() === 'css') {
        result = this.replaceWithColoredCode(codeElements, css);
      } else if (this.lang.toLowerCase() === 'bash') {
        result = this.replaceWithColoredCode(codeElements, bash);
      }

      return result;
    },
  },

  mounted() {
    this.$el.getElementsByTagName('code')[0].innerHTML = this.colorizeValue(this.$el.getElementsByTagName('code')[0].innerHTML);
  },

  computed: {
    classes() {
      return {
        copyable: this.copyable,
        dark: this.dark,
      };
    },
  },
};
</script>

<style>
code .bash-keyword {
  color: #f08d49;
}
code.dark .bash-keyword {
  color: #f08d49;
}

code .string {
  color: #63a35c;
}
code.dark .string {
  color: #7ec699;
}

code .special {
  color: #8e44ad;
}
code.dark .special {
  color: #74b9ff;
}

code .html {
  color: #2980b9;
}
code.dark .html {
  color: #e2777a;
}

code .special-colored {
  color: #2980b9;
}
code.dark .special-colored {
  color: #e2777a;
}

code .special-js-glob {
  color: #63a35c;
  font-weight: bold;
}
code.dark .special-js-glob {
  color: #7ec699;
  font-weight: bold;
}

code .special-comment{
  color: #63a35c;
}
code .special-js-meth {
  color: #E46D8A;
}

code .special-html {
  color: #9b901a;
}
code.dark .special-html {
  color: #E4D95F;
}

code .special-attributes {
  color: rgb(190, 74, 74);
}
</style>
