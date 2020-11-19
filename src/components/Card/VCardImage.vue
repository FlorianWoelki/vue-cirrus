<template>
  <div v-if="!animated" class="card-container">
    <div
      class="card-image"
      :style="image.startsWith('http://') || image.startsWith('https://')
        ? `background-image: url(${image})` : `background-image: url(${require(`@/${image}`)})`"
    ></div>
    <div class="title-container">
      <slot />
    </div>
  </div>
  <div v-else>
    <div class="card-container">
      <div
        class="card-image"
        :style="image.startsWith('http://') || image.startsWith('https://')
          ? `background-image: url(${image})` : `background-image: url(${require(`@/${image}`)})`"
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
    image: String,
  },
};
</script>
