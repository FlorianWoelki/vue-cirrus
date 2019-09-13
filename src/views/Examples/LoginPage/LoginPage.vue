<template>
  <div class="login-page">
    <v-row level noPadding>
      <v-col c4 noPadding>
        <LeftView />
      </v-col>
      <v-col c8 noPadding>
        <RightView />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LeftView from '@/views/Examples/LoginPage/LeftView.vue';
import RightView from '@/views/Examples/LoginPage/RightView.vue';

export default {
  components: {
    LeftView,
    RightView,
  },
};
</script>

<style>
button {
  border-radius: 2.1rem;
}
</style>
