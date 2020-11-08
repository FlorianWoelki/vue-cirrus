<template>
  <pre>
    <code
      ref="codeElement"
      :data-lang="lang"
      :class="classes"
    ><slot></slot></code>
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
    lang: {
      type: String,
      default: '',
    },
    dark: {
      type: Boolean,
      default: false,
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
  },

  mounted() {
    let codeElements = this.$refs.codeElement.innerHTML;

    if (this.lang.toLowerCase() === 'javascript') {
      codeElements = this.replaceWithColoredCode(codeElements, javascript);
    } else if (this.lang.toLowerCase() === 'html' || this.lang.toLowerCase() === 'vue') {
      codeElements = codeElements.replace('<xmp>', '').replace('</xmp>', '');
      codeElements = codeElements.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&lt;br&gt;/g, '<br />');
      codeElements = this.replaceWithColoredCode(codeElements, html);
    } else if (this.lang.toLowerCase() === 'css') {
      codeElements = this.replaceWithColoredCode(codeElements, css);
    } else if (this.lang.toLowerCase() === 'bash') {
      codeElements = this.replaceWithColoredCode(codeElements, bash);
    }

    this.$refs.codeElement.innerHTML = codeElements;
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
