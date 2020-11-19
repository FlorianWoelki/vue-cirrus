<template>
  <div class="right-view">
    <v-container>
      <v-space xlarge />
      <h3 class="mb-0">Login to your account!</h3>
      <h6 class="mt-1 font-light">Everything is save and encrypted 🤩</h6>

      <v-divider short />
      <v-space />

      <v-input-field
        v-model="email"
        placeholder="Email"
        @input="checkInput"
        icon
      >
        <template #title>
          Email
        </template>
        <span class="icon"><i class="far fa-wrapper fa-envelope-open"></i></span>
      </v-input-field>
      <v-input-field
        v-model="password"
        placeholder="Password"
        type="password"
        @input="checkInput"
        icon
      >
        <template #title>
          Password
        </template>
        <span class="icon"><i class="fas fa-wrapper fa-key"></i></span>
      </v-input-field>
      <v-row>
        <v-col c="6">
          <v-checkbox>Remember Me</v-checkbox>
        </v-col>
        <v-col c="6">
          <v-link class="u-pull-right">Forgot Password?</v-link>
        </v-col>
      </v-row>
      <v-row class="u-center">
        <v-col>
          <v-btn
            id="login-btn"
            :disabled="disabled"
            color="link"
            style="margin-right:12px;"
            @click="showFeedback"
            :animation="!disabled ? 'pulse' : null"
            infinite
          >Login</v-btn>
        </v-col>
      </v-row>

      <v-row class="u-center">
        <div id="feedback" style="visibility: hidden;">
          <p class="u-text-center">Entered Email: {{ email }}</p>
          <p class="u-text-center">Entered Password: {{ password }}</p>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    disabled: true,
  }),

  methods: {
    showFeedback() {
      document.getElementById('feedback').style.visibility = 'visible';
    },

    checkInput() {
      this.disabled = this.email.length === 0 || this.password.length === 0;
    },
  },
};
</script>

<style>
.login-page #feedback p {
  margin-top: -20px;
}
</style>
