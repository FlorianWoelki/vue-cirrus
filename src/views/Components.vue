<template>
  <Sidebar>
    <GettingStarted />
  </Sidebar>
</template>

<script>
import GettingStarted from '@/views/Home/GettingStarted.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
    GettingStarted,
  },
};
</script>
