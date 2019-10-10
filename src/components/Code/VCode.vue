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
  },

  mounted() {
    let codeElements = document.getElementById(this.codeId).innerHTML;

    if (this.lang.toLowerCase() === 'javascript') {
      Object.keys(javascript).forEach((key) => {
        codeElements = codeElements.replace(javascript[key].exp, `<span class="${javascript[key].class}">$&</span>`);
      });
    } else if (this.lang.toLowerCase() === 'html' || this.lang.toLowerCase() === 'vue') {
      codeElements = codeElements.replace('<xmp>', '').replace('</xmp>', '');
      codeElements = codeElements.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&lt;br&gt;/g, '<br />');
      Object.keys(html).forEach((key) => {
        codeElements = codeElements.replace(html[key].exp, `<span class="${html[key].class}">$&</span>`);
      });
    } else if (this.lang.toLowerCase() === 'css') {
      Object.keys(css).forEach((key) => {
        codeElements = codeElements.replace(css[key].exp, `<span class="${css[key].class}">$&</span>`);
      });
    } else if (this.lang.toLowerCase() === 'bash') {
      Object.keys(bash).forEach((key) => {
        codeElements = codeElements.replace(bash[key].exp, `<span class="${bash[key].class}">$&</span>`);
      });
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
        'feedback-blur': this.copyable,
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
  background: #2d2d2d !important;
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

.copy-feedback {
  font-family: Montserrat, sans-serif;
  font-size: 24px;

  position: absolute;
  left: 50%;
  transform: translate(-50%, 100%);
  z-index: 1;

  opacity: 0;
  -webkit-transition: all .8s ease-in-out;
  -moz-transition: all .8s ease-in-out;
  -ms-transition: all .8s ease-in-out;
  -o-transition: all .8s ease-in-out;
  transition: all .8s ease-in-out;
}
.feedback-blur {
  -webkit-filter: blur(0);
  -moz-filter: blur(0);
  -ms-filter: blur(0);
  -o-filter: blur(0);
  filter: blur(0);

  -webkit-transition: .8s ease-in-out;
  -moz-transition: .8s ease-in-out;
  -ms-transition: .8s ease-in-out;
  -o-transition: .8s ease-in-out;
  transition: .8s ease-in-out;
}
</style>
