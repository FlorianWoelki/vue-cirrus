<template>
  <Sidebar>
    <h1>{{$route.params.name}}</h1>
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
