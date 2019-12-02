<template>
  <div
    :class="datePickerClasses"
    :data-tooltip="tooltipData"
  >
    <label
      v-if=title
      class="font-normal"
    >{{title}}</label>
    <span
      v-if=subtitle
      class="info"
    >{{subtitle}}</span>
    <input
      v-if="date === ''"
      type="date"
      :value=currentDate
    >
    <input
      v-else
      type="date"
      :value=date
    >
    <span
      v-if=information
      class="info text-center"
    >{{information}}</span>
  </div>
</template>

<script>
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
    Animations,
    Tooltip,
  ],

  props: {
    date: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    information: {
      type: String,
      default: '',
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    datePickerClasses() {
      return Object.assign(
        this.animationsMixins,
        this.tooltipMixins,
        {
          'date-picker': true,
          dark: this.dark,
        },
      );
    },
    currentDate() {
      const today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();

      if (dd < 10) {
        dd = `0${dd}`;
      }
      if (mm < 10) {
        mm = `0${mm}`;
      }

      const todayDate = `${yyyy}-${mm}-${dd}`;
      return todayDate;
    },
  },
};
</script>

<style>
.date-picker.dark input[type="date"] {
  background-color: #272727;
  border-color: #272727;
  color: white;
}
</style>
