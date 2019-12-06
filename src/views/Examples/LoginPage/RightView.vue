<template>
  <div class="right-view">
    <v-container>
      <v-space xlarge />
      <h3>Login to your account!</h3>
      <h6 class="font-light">Everything is save and encrypted 🤩</h6>

      <v-divider short />
      <v-space />

      <v-input-field
        v-model="email"
        placeholder="Email"
        title="Email"
        @input="checkInput"
        icon
      >
        <span class="icon"><i class="far fa-wrapper fa-envelope-open"></i></span>
      </v-input-field>
      <v-input-field
        v-model="password"
        placeholder="Password"
        title="Password"
        type="password"
        @input="checkInput"
        icon
      >
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
      if (this.email.length > 0 && this.password.length > 0) {
        document.getElementById('login-btn').classList.add('animated');
        document.getElementById('login-btn').classList.add('infinite');
        document.getElementById('login-btn').classList.add('alternate');
        document.getElementById('login-btn').classList.add('pulse');

        this.disabled = false;
      } else {
        document.getElementById('login-btn').classList.remove('animated');
        document.getElementById('login-btn').classList.remove('infinite');
        document.getElementById('login-btn').classList.remove('alternate');
        document.getElementById('login-btn').classList.remove('pulse');

        this.disabled = true;
      }
    },
  },
};
</script>

<style>
.login-page #feedback p {
  margin-top: -20px;
}
</style>
