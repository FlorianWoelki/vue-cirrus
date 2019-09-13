<template>
  <div class="register-process">
    <v-container>
      <v-space xlarge />
      <h3>Login to your account!</h3>
      <h6 class="font-light">Everything is save and encrypted 🤩</h6>

      <v-divider short />
      <v-space />

      <v-input-field v-model="email" placeholder="Email" title="Email" icon>
        <span class="icon"><i class="far fa-wrapper fa-envelope-open"></i></span>
      </v-input-field>
      <v-input-field
        v-model="password"
        placeholder="Password"
        title="Password"
        type="password"
        icon
      >
        <span class="icon"><i class="fas fa-wrapper fa-key"></i></span>
      </v-input-field>
      <v-row>
        <v-col c6>
          <v-checkbox>Remember Me</v-checkbox>
        </v-col>
        <v-col c6>
          <v-link pullRight>Forgot Password?</v-link>
        </v-col>
      </v-row>
      <v-row center>
        <v-col>
          <v-btn
            link
            style="margin-right:12px;"
            @click="showFeedback"
          >Login</v-btn>
        </v-col>
        <v-col>
          <v-btn light>Cancel</v-btn>
        </v-col>
      </v-row>

      <v-row center>
        <v-toast id="feedback" style="visibility:hidden;">
          Email: {{ email }} <br />
          Password: {{ password }}
        </v-toast>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
  }),

  methods: {
    showFeedback() {
      document.getElementById('feedback').style.visibility = 'visible';
    },
  },
};
</script>
