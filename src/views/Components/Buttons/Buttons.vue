<template>
  <section class="buttons-section">
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
  </section>
</template>

<script>
import SimpleButtons from '@/views/Components/Buttons/SimpleButtons.vue';
import StyledButtons from '@/views/Components/Buttons/StyledButtons.vue';
import ButtonSizes from '@/views/Components/Buttons/ButtonSizes.vue';
import LoadingButtons from '@/views/Components/Buttons/LoadingButtons.vue';

export default {
  components: {
    SimpleButtons,
    StyledButtons,
    ButtonSizes,
    LoadingButtons,
  },
};
</script>
