<template>
  <section class="cards-component">
    <h5>Simple Cards</h5>
    <p>Create easy card layouts with this SimpleCard component.</p>
    <SimpleCard />

    <v-space xlarge />

    <h5>Minimum Cards</h5>
    <p>An easier way is to create a minimized card.</p>
    <MinCard />

    <v-space xlarge />

    <h5>Normal Cards</h5>
    <p>This is the standard way to create cards.</p>
    <Card />

    <h6>API (props)</h6>
    <API :data="props" />

    <v-space
      xlarge
      v-for="i in 2"
      :key="i"
    />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import SimpleCard from './SimpleCard.vue';
import MinCard from './MinCard.vue';
import Card from './Card.vue';

export default {
  components: {
    SimpleCard,
    API,
    MinCard,
    Card,
  },
  data() {
    return {
      props: {
        title: ['title', 'empty', 'String', '(All cards) Title of card'],
        height: ['height', '332px', 'String', '(All cards) Specify height for the image in card'],
        imgSrc: ['imgSrc', 'empty', 'String', '(MinCard) Image source'],
        imgId: ['imgId', 'projectLogo', 'String', '(MinCard) Image Id'],
        projectName: ['projectName', 'projectname', 'String', '(MinCard) Project name'],
        titleId: ['titleId', 'projectname', 'String', '(MinCard) Title Id'],
        subtitle: ['subtitle', 'empty', 'String', '(VCard) Subtitle for card'],
        footerText: ['footerText', 'empty', 'String', '(VCard) Footer text for card'],
        image: ['image', 'empty', 'String', '(VCard) Header image for card'],
      },
    };
  },
};
</script>
