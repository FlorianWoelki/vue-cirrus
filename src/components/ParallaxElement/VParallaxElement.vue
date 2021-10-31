<template>
  <div
    :style="{
      transform: `translateY(${offset()}px)`,
      marginBottom: `${offset() + margin}px`
    }"
    class="parallax-element"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import {
 defineComponent, onMounted, onUnmounted, ref,
} from 'vue';

export default defineComponent({
  props: {
    speed: {
      type: Number,
      default: 0.5,
    },
    margin: {
      type: Number,
      default: 50,
    },
    stopValue: {
      type: Number,
      default: 600,
    },
  },
  setup(props) {
    const currentOffset = ref<number>(0);
    const eventHandler = ref<null |(() => number)>(null);

    const calculateParallax = () => {
      if (window.pageYOffset <= props.stopValue) {
        currentOffset.value = window.pageYOffset * props.speed;
      }
    };

    onMounted(() => {
      calculateParallax();

      eventHandler.value = () => requestAnimationFrame(calculateParallax);
      window.addEventListener('resize', eventHandler.value);
      window.addEventListener('scroll', eventHandler.value);
      window.addEventListener('load', eventHandler.value);
    });

    onUnmounted(() => {
      if (eventHandler.value) {
        window.removeEventListener('resize', eventHandler.value);
        window.removeEventListener('scroll', eventHandler.value);
      }
    });

    const offset = (): number => -currentOffset.value;

    return {
      offset,
      currentOffset,
      eventHandler,
    };
  },
});
</script>
