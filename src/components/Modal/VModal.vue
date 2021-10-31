<template>
  <div
    :class="[
      'modal',
      size ? `modal-${size}` : null,
      animation ? `modal-animated--${animationString}` : null
    ]"
    :id="mId"
  >
    <a
      :href="closeTarget"
      class="modal-overlay close-btn"
      aria-label="Close"
    ></a>
    <div class="modal-content" role="document">
      <div class="modal-header">
        <a
          :href="closeTarget"
          class="u-pull-right"
          aria-label="Close"
          style="font-size: 20px;"
          @click="$emit('click-close', $event)"
        >
          <slot v-if="!applyDefaultCloseIcon" name="closeIcon" />
          <svg
            v-else
            class="text-link"
            style="width: 1.5rem; height: 1.5rem"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <div v-if="$slots['title']" class="modal-title">
          <slot name="title" />
        </div>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div v-if="$slots['footer']" class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    closeTarget: {
      type: String,
      default: '#target',
    },
    mId: {
      type: String,
      default: 'modal',
    },
    applyDefaultCloseIcon: Boolean,
    animation: {
      type: String,
      validator: (value: string) => ['dropdown', 'zoom-in', 'zoom-out'].indexOf(value) !== -1,
    },
    size: {
      type: String,
      validator: (value: string) => ['small', 'normal', 'large'].indexOf(value) !== -1,
    },
  },
  setup(props) {
    const animationString = computed((): string => {
      if (!props.animation) return '';

      const chars = props.animation.split(/(?=[A-Z])/);
      if (chars.length < 2) {
        return props.animation;
      }
      return `${chars[0]}-${chars[1].toLowerCase()}`;
    });

    return {
      animationString,
    };
  },
});
</script>
