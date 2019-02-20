<template>
  <pre>
    <code :id=codeId class="code" :data-lang=lang :keywords=keywords>
      <slot></slot>
    </code>
  </pre>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: '',
    },
    keywords: {
      type: String,
      default: '',
    },
  },

  computed: {
    codeId() {
      return `${this.lang}-code`;
    },
  },

  mounted() {
    const keywords = this.keywords.split(',');
    let currentHTML = document.getElementById(`${this.lang}-code`).innerHTML;

    // Colorize all strings
    currentHTML = currentHTML.replace(/("|').*?("|')/g, '<span class="quote">$&</span>');

    // Colorize all keywords
    let regexKeywords = '';
    for (let i = 0; i < keywords.length; i += 1) {
      const keyword = keywords[i].trim();
      regexKeywords += i === keywords.length - 1 ? keyword : `${keyword}|`;
    }

    const regexp = new RegExp(`\\b(${regexKeywords})\\b`, 'g');
    currentHTML = currentHTML.replace(regexp, '<span class="keyword">$1</span>');

    document.getElementById(`${this.lang}-code`).innerHTML = currentHTML;
  },
};
</script>

<style>
.code {
  display: block;
  color: #333;
  background: #f6f8fa !important;
  max-height: 500px;
}
.code .keyword {
  color: #2980b9;
  font-weight: 900;
}
.code .quote {
  color: #63a35c;
}
code {
  position: relative;
  overflow: auto;
  border-radius: 3px;
}
</style>
