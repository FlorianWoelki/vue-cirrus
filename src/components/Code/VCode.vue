<template>
  <pre>
    <div :id=feedbackId class="copy-feedback">Copied!</div>
    <pre>
      <code :data-lang=lang :id=codeId :class=classes @click="copy"><slot></slot></code>
    </pre>
  </pre>
</template>

<script>
import javascript from './javascript';
import html from './html';
import css from './css';

export default {
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
    copy() {
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

        // Display feedback
        const feedback = document.getElementById(this.feedbackId);
        feedback.style.opacity = 1;
        copyText.style.filter = 'blur(2px)';
        setTimeout(() => {
          feedback.style.opacity = 0;
          copyText.style.filter = 'blur(0)';
        }, 800);
      }
    },
  },

  mounted() {
    let codeElements = document.getElementById(this.codeId).innerHTML;

    if (this.lang.toLowerCase() === 'javascript') {
      Object.keys(javascript).forEach((key) => {
        codeElements = codeElements.replace(javascript[key].exp, `<span class="${javascript[key].class}">$&</span>`);
      });
    } else if (this.lang.toLowerCase() === 'html') {
      codeElements = codeElements.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&lt;br&gt;/g, '<br />');
      Object.keys(html).forEach((key) => {
        codeElements = codeElements.replace(html[key].exp, `<span class="${html[key].class}">$&</span>`);
      });
    } else if (this.lang.toLowerCase() === 'css') {
      Object.keys(css).forEach((key) => {
        codeElements = codeElements.replace(css[key].exp, `<span class="${css[key].class}">$&</span>`);
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
      return `${this.lang} ${this.copyable ? '(Copy)' : ''}`;
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
  color: white;
  background: #2d2d2d !important;
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

code .special-js {
  color: #2980b9;
}
code.dark .special-js {
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
  color: #aaa;
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

code .special-sql {
  color: #1D968C;
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
