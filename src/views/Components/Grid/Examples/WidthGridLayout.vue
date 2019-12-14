<template>
  <div class="grid-example-width u-text-center">
    <v-row v-for="i in range()" :key="i">
      <v-col :w="i" class="column-showcase">w="{{ i }}"</v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    range() {
      const result = [];
      for (let i = 10; i <= 100; i += 10) {
        result.push(`${i}`);
      }
      return result;
    },
  },
};
</script>
