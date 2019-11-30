<template>
  <section class="util-component">
    <p class="no-upper-margin">
      Here you can see some <kbd>util</kbd> functionalities, you can use
      in your project.
    </p>

    <v-space xlarge />
    <h5>Container</h5>
    <p class="no-upper-margin">
      You can simply use the <kbd>v-container</kbd> to containerize your content.
      The black background color is the container.
    </p>
    <v-container style="background-color: #191919;">
      <h3 class="white">Containerized Element</h3>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      propsData: {
        title: 'Awesome Card Title',
        content: 'Some basic content',
        footer: '6:32 PM - 3 Jul 19',
      },
      props: [
        ['v-card', 'animated', 'boolean', 'false', 'Set the card to a animated one.'],
        ['v-card', 'equalHeight', 'boolean', 'false', 'For multiple cards set the height to the same one.'],
        ['v-card-image', 'image', 'string', 'empty', 'Set the source for the card image.'],
        ['v-card-image', 'height', 'string', '332px', 'Set the height of the image in the card.'],
      ],
    };
  },

  computed: {
    customCode() {
      return `
<v-card>
  <v-card-title>${this.propsData.title}</v-card-title>
  <v-card-content>
    <v-space></v-space>
    <v-avatar text="FW"></v-avatar>
    <p>${this.propsData.content}</p>
    <a href="#">#vue-cirrus</a>
    <a href="#">#cirrus</a>
  </v-card-content>

  <v-card-footer>${this.propsData.footer}</v-card-footer>
</v-card>
`;
    },
  },
};
</script>
