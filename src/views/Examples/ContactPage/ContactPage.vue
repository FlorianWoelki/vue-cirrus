<template>
  <div class="contact-page">
    <v-container class="u-text-center">
      <h3 class="font-light">Get In Touch</h3>
      <p class="font-light u-center">
        We're here for you! Just drop us a dope message or a question.
        We're really looking forward to answer you!
      </p>
      <div class="u-center">
        <v-input-field large placeholder="Name..."></v-input-field>
      </div>
      <div class="u-center">
        <v-input-field large placeholder="Email..."></v-input-field>
      </div>
      <div class="u-center">
        <v-input-field large placeholder="Regarding..."></v-input-field>
      </div>
      <div class="u-center">
        <v-text-area large placeholder="Message... (10 character minimum)"></v-text-area>
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

  .content {
    margin-top: 125px;
  }

  textarea {
    font-size: 1.5rem;
  }

  p {
    max-width: 400px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .input-control,
  textarea {
    width: 500px;
  }
}
</style>
