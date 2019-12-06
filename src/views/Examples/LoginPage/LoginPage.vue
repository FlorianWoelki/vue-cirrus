<template>
  <div class="login-page">
    <v-row level class="u-no-padding">
      <v-col c="4" class="u-no-padding">
        <LeftView />
      </v-col>
      <v-col c="8" class="u-no-padding">
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
.login-page button {
  border-radius: 2.1rem;
}
</style>
