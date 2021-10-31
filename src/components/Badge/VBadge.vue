<template>
  <div ref="badge">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  props: {
    content: {
      type: String,
      default: '0',
    },
    position: {
      type: String,
      default: 'right',
    },
    color: String,
  },
  setup(props) {
    const badge = ref<null | HTMLElement>(null);

    onMounted(() => {
      const node = badge.value;
      if (!node) {
        return;
      }

      const spanChild = node.children[0];
      if (spanChild) {
        spanChild.classList.add('badge');
        spanChild.classList.add(props.position);

        if (props.color) {
          spanChild.classList.add(props.color);
        }
        spanChild.setAttribute('data-badge', props.content);
      }
    });

    return {
      badge,
    };
  },
});
</script>

<style>
.badge {
  position: relative;
}

.badge[data-badge]:after {
  content: attr(data-badge);
  position: absolute;
  font-size: 0.65em;
  background: #fefefe;
  color: #737373;
  border-color: #d9d9d9;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  box-shadow: 0 0 1px #333;
}
.badge.primary[data-badge]:after {
  background: #f03d4d;
  color: #fff;
  border-color: #c21b2b;
}
.badge.info[data-badge]:after {
  background: #2972fa;
  color: #fff;
  border-color: #205bc8;
}
.badge.link[data-badge]:after {
  background: #5e5cc7;
  color: #fff;
  border-color: #4b499f;
}
.badge.dark[data-badge]:after {
  background: #363636;
  color: #fff;
  border-color: #2b2b2b;
}
.badge.black[data-badge]:after {
  background: #000;
  color: #fff;
  border-color: #2b2b2b;
}
.badge.success[data-badge]:after {
  background: #0dd157;
  color: #fff;
  border-color: #0aa746;
}
.badge.warning[data-badge]:after {
  background: #fab633;
  color: #fff;
  border-color: #c89028;
}
.badge.danger[data-badge]:after {
  background: #fb4143;
  color: #fff;
  border-color: #c83436;
}
.badge.light[data-badge]:after {
  background: #f6f9fc;
  color: #000;
  border-color: #c4c7c9;
}

.badge.right[data-badge]:after {
  top: -10px;
  right: -20px;
}

.badge.left[data-badge]:after {
  top: -10px;
  left: -20px;
}
.badge.left.bottom[data-badge]:after {
  top: 10px;
  left: -20px;
}
.badge.right.bottom[data-badge]:after {
  top: 10px;
  right: -20px;
}
</style>
