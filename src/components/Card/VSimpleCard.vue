<template>
  <div class="card">
    <div
      v-if="image === ''"
      class="card-head"
    >
      <p class="card-head-title">{{title}}</p>
    </div>
    <div
      v-else
      class="card-container"
    >
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
        <p class="subtitle">{{ subtitle }}</p>
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
      default: '',
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
