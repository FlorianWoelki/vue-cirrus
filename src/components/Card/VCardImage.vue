<template>
  <div v-if="!animated" class="card-container">
    <div class="card-image" :style="`background-image: url(${image})`"></div>
    <div class="title-container">
      <slot />
    </div>
  </div>
  <div v-else>
    <div class="card-container">
      <div class="card-image" :style="`background-image: url(${image})`"></div>
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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inject: ['animated'],

  provide() {
    return {
      cardImage: this.image,
    };
  },

  props: {
    image: String,
  },
});
</script>
