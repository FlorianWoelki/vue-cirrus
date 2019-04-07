<template>
  <table class="table striped">
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :key=header
        >{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <!-- TODO: Add mixins -->
      <tr
        v-for="prop in props"
        :key=prop[0]
      >
        <td>{{prop[0]}}</td>
        <td>{{prop[1]}}</td>
        <td>{{prop[2]}}</td>
        <td>{{prop[3]}}</td>
      </tr>
    </tbody>
    <p>Mixins included: <a href="#/components/Animations">Click Me</a></p>
  </table>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      headers: ['Name', 'Default', 'Type', 'Description'],
      props: this.data,
    };
  },
};
</script>
