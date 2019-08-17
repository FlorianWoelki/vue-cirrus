<template>
  <div class="card">
    <div class="content">
      <div class="row">
        <img
          v-if="image.startsWith('http://') || image.startsWith('https://')"
          :src="image"
          class="level"
          :id="imgId"
          :width="width"
          :height="height"
        />
        <img
          v-else
          :src="`${require(`@/${image}`)}`"
          class="level"
          :id="imgId"
          :width="width"
          :height="height"
        />
        <p
          :id="projectName"
          class="title level"
        >{{title}}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: 'https://maxcdn.icons8.com/Share/icon/Logos//chrome1600.png',
    },
    imgId: {
      type: String,
      default: 'projectlogo',
    },
    projectName: {
      type: String,
      default: 'projectname',
    },
    title: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '300px',
    },
    height: {
      type: String,
      default: '300px',
    },
  },
};
</script>
