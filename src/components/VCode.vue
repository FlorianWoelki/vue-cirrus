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

    const regexp = /".*?"/g;
    const matches = regexp.exec(currentHTML);
    matches.forEach((match) => {
      currentHTML = currentHTML.replace(match, `<span class="quote">${match}</span>`);
    });

    keywords.forEach((keyword) => {
      currentHTML = currentHTML.replace(keyword, `<span class="keyword">${keyword}</span>`);
    });

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
