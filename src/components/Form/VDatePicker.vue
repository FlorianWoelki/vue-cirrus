<template>
  <div :class="datePickerClasses" :data-tooltip="tooltipText">
    <label v-if="title" class="font-normal">{{ title }}</label>
    <input v-if="date" type="date" :value="currentDate" />
    <input v-else type="date" :value="date" />
    <span v-if="information" class="info text-center">{{ information }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import {
  withAnimationClasses,
  withAnimationProps,
} from '../../mixins/animations';
import { withTooltipClasses, withTooltipProps } from '../../mixins/tooltip';

export default defineComponent({
  props: {
    ...withAnimationProps(),
    ...withTooltipProps(),
    date: String,
    title: String,
    information: String,
  },
  setup(props) {
    const datePickerClasses = computed(() => Object.assign({
        ...withAnimationClasses(props).animationClasses,
        ...withTooltipClasses(props).tooltipClasses,
        'date-picker': true,
      }));

    const currentDate = computed((): string => {
      const today = new Date();
      let dd: number | string = today.getDate();
      let mm: number | string = today.getMonth() + 1;
      const yyyy = today.getFullYear();

      if (dd < 10) {
        dd = `0${dd}`;
      }
      if (mm < 10) {
        mm = `0${mm}`;
      }

      const todayDate = `${yyyy}-${mm}-${dd}`;
      return todayDate;
    });

    return {
      datePickerClasses,
      currentDate,
    };
  },
});
</script>
