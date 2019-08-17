<template>
  <div class="card">
    <div class="card-container">
      <div
        v-if="image.startsWith('http://') || image.startsWith('https://')"
        class="card-image"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
      <div
        v-else
        class="card-image"
        :style="{ backgroundImage: `url(${require(`@/${image}`)})` }"
      ></div>
      <div class="title-container">
        <p class="title">{{ title }}</p>
        <span class="subtitle">{{ subtitle }}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'undefined',
    },
    subtitle: {
      type: String,
      default: 'undefined',
    },
    image: {
      type: String,
      default: '',
    },
  },
};
</script>
