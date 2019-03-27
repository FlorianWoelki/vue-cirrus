<template>
  <section class="buttons-component">
    <h5>Creating simple buttons</h5>
    <p>You can easily create normal buttons with the awesome v-btn component!</p>
    <SimpleButtons />

    <v-space xlarge />

    <h5>Size your Buttons</h5>
    <p>Easily size your buttons, however you want</p>
    <ButtonSizes />

    <v-space xlarge />

    <h5>Give some style to your buttons</h5>
    <p>Easy styles with Vue Cirrus is now possible!</p>
    <StyledButtons />

    <v-space xlarge />

    <h5>Loading Buttons</h5>
    <p>If you want to display some loading activity. This is the way to go!</p>
    <LoadingButtons />

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data=props />

    <v-space xlarge v-for="i in 2" :key=i />
  </section>
</template>

<script>
import SimpleButtons from '@/views/Components/Buttons/SimpleButtons.vue';
import StyledButtons from '@/views/Components/Buttons/StyledButtons.vue';
import ButtonSizes from '@/views/Components/Buttons/ButtonSizes.vue';
import LoadingButtons from '@/views/Components/Buttons/LoadingButtons.vue';
import API from '@/views/Components/API.vue';

export default {
  components: {
    SimpleButtons,
    StyledButtons,
    ButtonSizes,
    LoadingButtons,
    API,
  },

  data() {
    return {
      props: {
        onClick: ['onClick', 'null', 'Function', 'Button click event'],
        animated: ['animated', 'false', 'Boolean', 'Button click animation'],
        btnStyle: ['btnStyle', 'Empty', 'String', 'Button color'],
        xsmall: ['xsmall', 'false', 'Boolean', 'Button xsmall size'],
        small: ['small', 'false', 'Boolean', 'Button small size'],
        large: ['large', 'false', 'Boolean', 'Button large size'],
        xlarge: ['xlarge', 'false', 'Boolean', 'Button xlarge size'],
        loadingLeft: ['loadingLeft', 'false', 'Boolean', 'Loading left animation'],
        loadingRight: ['loadingRight', 'false', 'Boolean', 'Loading right animation'],
      },
    };
  },

  mounted() {
    const classes = document.getElementsByClassName('copy-feedback');
    while (classes[0]) {
      classes[0].parentNode.removeChild(classes[0]);
    }
  },
};
</script>
