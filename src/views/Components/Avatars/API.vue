<template>
  <table class="table striped">
    <thead>
      <tr>
        <th v-for="header in headers" :key=header>{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <!-- TODO: Add mixins -->
      <tr v-for="prop in props" :key=prop>
        <td>{{prop[0]}}</td>
        <td>{{prop[1]}}</td>
        <td>{{prop[2]}}</td>
        <td>{{prop[3]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      headers: ['Name', 'Default', 'Type', 'Description'],
      props: {
        src: ['src', 'Empty', 'String', 'Avatar image source'],
        text: ['text', 'Empty', 'String', 'Avatar text'],
        padded: ['padded', 'false', 'Boolean', 'Enable padding around avatar'],
        xsmall: ['xsmall', 'false', 'Boolean', 'Avatar xsmall size'],
        small: ['small', 'false', 'Boolean', 'Avatar small size'],
        large: ['large', 'false', 'Boolean', 'Avatar large size'],
        xlarge: ['xlarge', 'false', 'Boolean', 'Avatar xlarge size'],
      },
    };
  },
};
</script>
