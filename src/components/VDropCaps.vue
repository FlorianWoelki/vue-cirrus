<template>
  <div
    :id=id
    :class=classes
  >
    <slot></slot>
  </div>
</template>

<script>
import Layout from '@/mixins/layout';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Layout,
    Animations,
  ],

  props: {
    letterColor: {
      type: String,
      default: 'red',
    },
    id: {
      type: String,
      default: 'drop-caps',
    },
  },

  mounted() {
    const innerHTML = document.getElementById(this.id).innerHTML.trim();
    let newInnerHTML = `<span style="color: ${this.letterColor};">${innerHTML[0]}</span>`;
    for (let i = 1; i < innerHTML.length; i += 1) {
      newInnerHTML += innerHTML[i];
    }

    document.getElementById(this.id).innerHTML = newInnerHTML;
  },

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        this.animationsMixins,
        {
          'drop-caps': true,
        },
      );
    },
  },
};
</script>

<style>
.drop-caps:first-child:first-letter {
  font-size: 80px;
  padding-right: 8px;
  float: left;
  line-height: 0.7;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
