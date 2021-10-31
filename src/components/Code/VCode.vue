<template>
  <pre>
    <code
      :data-lang="lang"
      :class="classes"
    >{{ value }}</code>
  </pre>
</template>

<script lang="ts">
import {
 computed, defineComponent, onMounted, ref,
} from 'vue';
import javascript from './javascript';
import html from './html';
import css from './css';
import bash from './bash';

export default defineComponent({
  data() {
    return {
      copied: false,
    };
  },
  props: {
    value: String,
    lang: {
      type: String,
      required: true,
    },
    dark: Boolean,
  },
  setup(props) {
    const el = ref<null | HTMLElement>(null);

    const replaceWithColoredCode = (codeElements: any, lang: any): any => {
      let newColoredElements = codeElements;
      Object.keys(lang).forEach((key) => {
        newColoredElements = newColoredElements.replace(
          lang[key].exp,
          `<span class="${lang[key].class}">$&</span>`,
        );
      });
      return newColoredElements;
    };

    const colorizeValue = (codeElements: any): any => {
      let result = codeElements;

      if (props.lang.toLowerCase() === 'javascript') {
        result = replaceWithColoredCode(codeElements, javascript);
      } else if (
        props.lang.toLowerCase() === 'html'
        || props.lang.toLowerCase() === 'vue'
      ) {
        result = codeElements.replace('<xmp>', '').replace('</xmp>', '');
        result = codeElements
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/&lt;br&gt;/g, '<br />');
        result = replaceWithColoredCode(result, html);
      } else if (props.lang.toLowerCase() === 'css') {
        result = replaceWithColoredCode(codeElements, css);
      } else if (props.lang.toLowerCase() === 'bash') {
        result = replaceWithColoredCode(codeElements, bash);
      }

      return result;
    };

    onMounted(() => {
      if (!el.value) {
        return;
      }

      el.value.getElementsByTagName('code')[0].innerHTML = colorizeValue(
        el.value.getElementsByTagName('code')[0].innerHTML,
      );
    });

    const classes = computed(() => ({
      dark: props.dark,
    }));

    return {
      classes,
      colorizeValue,
      replaceWithColoredCode,
    };
  },

  watch: {
    value(newVal) {
      this.$el.getElementsByTagName('code')[0].innerHTML = this.colorizeValue(
        newVal,
      );
    },
  },
});
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

code .special-comment {
  color: #63a35c;
}
code .special-js-meth {
  color: #e46d8a;
}

code .special-html {
  color: #9b901a;
}
code.dark .special-html {
  color: #e4d95f;
}

code .special-attributes {
  color: rgb(190, 74, 74);
}
</style>
