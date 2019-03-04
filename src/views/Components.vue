<template>
  <Sidebar>
    <h3>Components</h3>
    <v-divider />

    <p>
      Welcome to the components page.
    </p>
    <p>
      On the sidebar you can see all current developed components.
    </p>
  </Sidebar>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>
