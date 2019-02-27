<template>
  <ul class="pagination no-bullets">
    <li v-if="!onlyNext" class="pagination-item pagination-prev">
      <a href="#" class="display-block">
        <p class="pagination-item-subtitle">Previous</p>
        <h5 class="light no-margin">{{prevText}}</h5>
      </a>
    </li>
    <li v-if="!onlyPrev" class="pagination-item pagination-next">
      <a href="#" class="display-block">
        <p class="pagination-item-subtitle">Next</p>
        <h5 class="light no-margin">{{nextText}}</h5>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    nextText: {
      type: String,
      default: 'Next',
    },
    prevText: {
      type: String,
      default: 'Previous',
    },
    onlyNext: {
      type: Boolean,
      default: false,
    },
    onlyPrev: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
