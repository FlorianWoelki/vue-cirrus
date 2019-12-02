<template>
  <pre>
    <code
      :data-lang="dataLang"
      :id="codeId"
      :class="classes"
      @click="copy($event)"
    >
      <slot></slot>
    </code>
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
    copyable: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    copy(event) {
      this.$emit('click', event);

      if (this.copyable) {
        const copyText = document.getElementById(this.codeId);

        if (document.body.createTextRange) {
          const range = document.body.createTextRange();
          range.moveToElementText(copyText);
          range.select();
        } else if (window.getSelection) {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(copyText);
          selection.removeAllRanges();
          selection.addRange(range);
        }

        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        this.copied = true;
      }
    },

    replaceWithColoredCode(codeElements, lang) {
      let newColoredElements = codeElements;
      Object.keys(lang).forEach((key) => {
        newColoredElements = newColoredElements.replace(lang[key].exp, `<span class="${lang[key].class}">$&</span>`);
      });
      return newColoredElements;
    },
  },

  mounted() {
    let codeElements = document.getElementById(this.codeId).innerHTML;

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

    document.getElementById(this.codeId).innerHTML = codeElements;

    if (this.copyable) {
      document.getElementById(this.codeId).style.cursor = 'pointer';
    }
  },

  computed: {
    codeId() {
      return `${this.lang}-code-${Math.random() * (10 - 1) + 1}`;
    },
    feedbackId() {
      return `${this.lang}-feedback-${Math.random() * (10 - 1) + 1}`;
    },
    dataLang() {
      const isCopied = this.copied ? '(Copied)' : '(Copy)';
      return `${this.lang} ${this.copyable ? isCopied : ''}`;
    },
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
code {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
pre {
  margin-top: -1.5rem;
  margin-bottom: -1.5rem;
}
code {
  display: block;
  color: #333;
  background: #f6f8fa !important;
  max-height: 500px;
  position: relative;
  overflow: auto;
  border-radius: 3px;
}
code.dark {
  color: rgb(185, 184, 184);
  background: #272727 !important;
}

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
