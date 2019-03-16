<template>
  <div
    :id=id
    class="drop-caps"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
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
