<template>
  <textarea
    :data-tooltip="tooltipData"
    :class="[
      tooltipMixins,
      animationsMixins,
    ]"
  ></textarea>
</template>

<script>
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
    Animations,
    Tooltip,
  ],
};
</script>
