<template>
  <div
    ref="snackbar"
    :class="[
      'snackbar',
      animationClasses,
      color ? `${color}-snackbar` : null,
      position ? getPosition : null
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
 ref, defineComponent, computed, watch,
} from 'vue';
import {
  withAnimationClasses,
  withAnimationProps,
} from '../../mixins/animations';

export default defineComponent({
  props: {
    ...withAnimationProps(),
    value: Boolean,
    color: String,
    position: {
      type: String,
      default: 'topCenter',
    },
    timeout: {
      type: Number,
      default: 3000,
    },
  },
  setup(props) {
    const isActive = ref<boolean>(false);
    const snackbar = ref<HTMLElement | null>(null);

    const startTimeout = (): void => {
      if (!isActive.value && snackbar.value) {
        snackbar.value.classList.add('show');
        isActive.value = true;

        setTimeout(() => {
          isActive.value = false;
          if (snackbar.value) {
            snackbar.value.classList.remove('show');
          }
        }, props.timeout);
      }
    };

    const value = ref(props.value);
    watch(value, () => {
      startTimeout();
    });

    const getPosition = computed(() => {
      const chars = props.position.split(/(?=[A-Z])/);
      return `${chars[0]}-${chars[1].toLowerCase()}`;
    });

    return {
      ...withAnimationClasses(props),
      getPosition,
      isActive,
      snackbar,
    };
  },
});
</script>

<style>
.snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #eee;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
}

.snackbar.primary-snackbar {
  background: #f03d4d;
  color: #fff;
  border-color: #c21b2b;
}
.snackbar.info-snackbar {
  background: #2972fa;
  color: #fff;
  border-color: #205bc8;
}
.snackbar.link-snackbar {
  background: #5e5cc7;
  color: #fff;
  border-color: #4b499f;
}
.snackbar.dark-snackbar {
  background: #363636;
  color: #fff;
  border-color: #2b2b2b;
}
.snackbar.success-snackbar {
  background: #0dd157;
  color: #fff;
  border-color: #0aa746;
}
.snackbar.warning-snackbar {
  background: #fab633;
  color: #fff;
  border-color: #c89028;
}
.snackbar.danger-snackbar {
  background: #fb4143;
  color: #fff;
  border-color: #c83436;
}
.snackbar.light-snackbar {
  background: #f6f9fc;
  color: #000;
  border-color: #c4c7c9;
}

.snackbar.top-center {
  top: 15px;
  left: 50%;
}
.snackbar.top-left {
  top: 15px;
  left: 141px;
}
.snackbar.top-right {
  top: 15px;
  right: 18px;
}

.snackbar.bottom-center {
  bottom: 30px;
  left: 50%;
}
.snackbar.bottom-left {
  bottom: 30px;
  left: 141px;
}
.snackbar.bottom-right {
  bottom: 30px;
  right: 18px;
}

.snackbar.bottom-center.show,
.snackbar.bottom-left.show,
.snackbar.bottom-right.show {
  visibility: visible;
  -webkit-animation: fadeinBottom 0.5s, fadeoutBottom 0.5s 2.5s;
  -moz-animation: fadeinBottom 0.5s, fadeoutBottom 0.5s 2.5s;
  -o-animation: fadeinBottom 0.5s, fadeoutBottom 0.5s 2.5s;
  animation: fadeinBottom 0.5s, fadeoutBottom 0.5s 2.5s;
}

.snackbar.top-center.show,
.snackbar.top-left.show,
.snackbar.top-right.show {
  visibility: visible;
  -webkit-animation: fadeinTop 0.5s, fadeoutTop 0.5s 2.5s;
  -moz-animation: fadeinTop 0.5s, fadeoutTop 0.5s 2.5s;
  -o-animation: fadeinTop 0.5s, fadeoutTop 0.5s 2.5s;
  animation: fadeinTop 0.5s, fadeoutTop 0.5s 2.5s;
}

@-webkit-keyframes fadeinTop {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 15px;
    opacity: 1;
  }
}
@keyframes fadeinTop {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 15px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeoutTop {
  from {
    top: 15px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}
@keyframes fadeoutTop {
  from {
    top: 15px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}

@-webkit-keyframes fadeinBottom {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}
@keyframes fadeinBottom {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeoutBottom {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
@keyframes fadeoutBottom {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
