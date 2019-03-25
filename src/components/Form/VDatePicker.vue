<template>
  <input v-if="date === ''" type="date" :value=currentDate>
  <input v-else type="date" :value=date>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: '',
    },
  },

  computed: {
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
