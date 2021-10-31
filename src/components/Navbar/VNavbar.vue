<template>
  <div
    :class="[
      'header u-unselectable header-animated',
      {
        'header-fixed': fixed,
        'header-dark': dark,
        'header-clear': clear
      }
    ]"
  >
    <div class="header-brand">
      <div class="nav-item no-hover">
        <slot name="brandTitle"></slot>
      </div>
      <div ref="navBtn" class="nav-item nav-btn" @click="toggleNavbarBtn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div ref="headerMenu" class="header-nav">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['open-mobile'],
  props: {
    fixed: Boolean,
    dark: Boolean,
    clear: Boolean,
  },
  setup(_, { emit }) {
    const headerMenu = ref<HTMLElement | null>(null);
    const navBtn = ref<HTMLElement | null>(null);

    const toggleNavbarBtn = (): void => {
      if (!headerMenu.value || !navBtn.value) {
        return;
      }

      navBtn.value.classList.toggle('active');
      headerMenu.value.classList.toggle('active');
      emit('open-mobile');
    };

    return {
      toggleNavbarBtn,
    };
  },
});
</script>
