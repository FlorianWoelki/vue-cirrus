export const withTooltipProps = () => ({
    tooltipText: {
      type: String,
      default: null,
    },
    tooltipPosition: {
      type: String,
      default: null,
    },
});

export const withTooltipClasses = (props: Readonly<{ tooltipText: string, tooltipPosition: string }>) => ({
  tooltipClasses: {
    tooltip: props.tooltipText !== null,
    'tooltip--top-left': props.tooltipPosition === 'topLeft',
    'tooltip--top-right': props.tooltipPosition === 'topRight',
    'tooltip--bottom': props.tooltipPosition === 'bottom',
    'tooltip--bottom-left': props.tooltipPosition === 'bottomLeft',
    'tooltip--bottom-right': props.tooltipPosition === 'bottomRight',
    'tooltip--left': props.tooltipPosition === 'left',
    'tooltip--right': props.tooltipPosition === 'right',
  },
});
