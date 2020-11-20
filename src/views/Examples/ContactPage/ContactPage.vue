<template>
  <div class="contact-page">
    <v-container class="u-text-center">
      <h3 class="font-light">Get In Touch</h3>
      <p class="font-light u-center">
        We're here for you! Just drop us a dope message or a question.
        We're really looking forward to answer you!
      </p>
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
      <v-checkbox class="font-light mt-2 mb-2">
        Send me updates about Vue Cirrus Products and services.
      </v-checkbox>
      <v-btn color="primary" class="u-center" size="large">Send it!</v-btn>
    </v-container>
  </div>
</template>

<style lang="scss">
.contact-page {
  p {
    max-width: 400px;
  }

  .input-control,
  textarea {
    width: 500px;
  }
}
</style>
