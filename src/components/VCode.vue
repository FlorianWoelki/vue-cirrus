<template>
  <pre>
    <div :id=feedbackId class="copy-feedback">Copied!</div>
    <pre>
      <code :id=codeId :class=classes @click="copy"><slot></slot></code>
    </pre>
  </pre>
</template>

<script>
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
  },

  methods: {
    copy() {
      if (this.copyable) {
        const copyText = document.getElementById(`${this.lang}-code`);

        let range;
        let selection;

        if (document.body.createTextRange) {
          range = document.body.createTextRange();
          range.moveToElementText(copyText);
          range.select();
        } else if (window.getSelection) {
          selection = window.getSelection();
          range = document.createRange();
          range.selectNodeContents(copyText);
          selection.removeAllRanges();
          selection.addRange(range);
        }

        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        // Display feedback
        const feedback = document.getElementById(`${this.lang}-feedback`);
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
    document.getElementById(this.codeId).classList.add(`language-${this.lang}`);

    if (this.copyable) {
      document.getElementById(`${this.lang}-code`).style.cursor = 'pointer';
    }
  },

  computed: {
    codeId() {
      return `${this.lang}-code`;
    },
    feedbackId() {
      return `${this.lang}-feedback`;
    },
    dataLang() {
      return `${this.lang} ${this.copyable ? '(Copy)' : ''}`;
    },
    classes() {
      return {
        copyable: this.copyable,
        'feedback-blur': this.copyable,
      };
    },
  },
};
</script>

<style>
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
