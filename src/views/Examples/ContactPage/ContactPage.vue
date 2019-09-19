<template>
  <div class="contact-page">
    <v-container class="u-text-center">
      <h3 class="font-light">Get In Touch</h3>
      <v-space />
      <p class="font-light u-center">
        We're here for you! Just drop us a dope message or a question.
        We're really looking forward to answer you!
      </p>
      <v-space />
      <div class="u-center">
        <v-input-field placeholder="Name..."></v-input-field>
      </div>
      <div class="u-center">
        <v-input-field placeholder="Email..."></v-input-field>
      </div>
      <div class="u-center">
        <v-input-field placeholder="Regarding..."></v-input-field>
      </div>
      <div class="u-center">
        <v-text-area placeholder="Message... (10 character minimum)"></v-text-area>
      </div>
      <div id="send-updates-checkbox">
        <v-checkbox class="font-light">
          Send me updates about Vue Cirrus Products and services.
        </v-checkbox>
      </div>
      <v-btn primary center large>Send it!</v-btn>
    </v-container>
  </div>
</template>

<style lang="scss">
.contact-page {
  #send-updates-checkbox {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  p {
    max-width: 400px;
  }

  .input-control,
  textarea {
    width: 500px;
  }
}
</style>
