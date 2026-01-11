<script lang="ts">
export let size = '1em';
export let color = 'currentColor';
export let label= '';
let customClass = '';
export { customClass as class };
</script>

<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
width={size}
height={size}
fill={color}
aria-label={label ? label : undefined}
aria-hidden={!label ? 'true' : undefined}
role={label ? 'img' : undefined}
class="remixicon ri-stacked-chart-fill {customClass}"
{...$$restProps}
>
<path d="M8 21H3V13H8V21ZM14.5 21H9.5V15H14.5V21ZM21 21H16V17H21V21ZM14.5 14H9.5V3H14.5V14ZM21 16H16V8H21V16ZM8 12H3V8H8V12Z"></path>
</svg>
