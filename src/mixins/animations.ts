export const withAnimationProps = () => ({
  infinite: {
    type: Boolean,
    default: false,
  },
  paused: {
    type: Boolean,
    default: false,
  },
  animation: {
    type: String,
    default: null,
  },
});

export const withAnimationClasses = (props: Readonly<{ animation: string, paused: boolean, infinite: boolean }>) => ({
  animationClasses: {
    animated:
      props.animation === 'fadeIn'
      || props.animation === 'bounceIn'
      || props.animation === 'bounce'
      || props.animation === 'pulse'
      || props.animation === 'loadingLeft'
      || props.animation === 'loadingRight',
    'infinite alternate': props.infinite,
    bounceIn: props.animation === 'bounceIn',
    bounce: props.animation === 'bounce',
    pulse: props.animation === 'pulse',
    paused: props.paused,
    fadeIn: props.animation === 'fadeIn',
    'hover-grow': props.animation === 'hoverGrow',
    'loading loading-left': props.animation === 'loadingLeft',
    'loading loading-right': props.animation === 'loadingRight',
  },
});
