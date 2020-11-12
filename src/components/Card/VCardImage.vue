<template>
  <div v-if="!animated" class="card-container" :style="{ 'min-height': `${height}` }">
    <div
      class="card-image"
      :style="image.startsWith('http://') || image.startsWith('https://')
        ? `background-image: ${image}` : `background-image: ${require(`@/${src}`)}`"
    ></div>
    <div class="title-container">
      <slot />
    </div>
  </div>
  <div v-else>
    <div class="card-container" :style="{ 'min-height': `${height}` }">
      <div
        class="card-image"
        :style="image.startsWith('http://') || image.startsWith('https://')
          ? `background-image: url(${image})` : `background-image: ${require(`@/${src}`)}`"
      ></div>
    </div>
    <div class="mobile-title">
      <div class="content">
        <div class="tile">
          <div class="tile__container">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['animated'],

  provide() {
    return {
      cardImage: this.image,
    };
  },

  props: {
    image: {
      type: String,
      default: '',
      // default: 'background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);',
    },
    height: {
      type: String,
      default: '332px',
    },
  },
};
</script>
