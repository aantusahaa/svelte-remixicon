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
class="remixicon ri-stacked-chart-line {customClass}"
{...$$restProps}
>
<path d="M8 8V20H3V8H8ZM14.5 4V20H9.5V4H14.5ZM21 9V20H16V9H21ZM18 18H19V17H18V18ZM11.5 18H12.5V16H11.5V18ZM5 18H6V14H5V18ZM18 15H19V11H18V15ZM11.5 14H12.5V6H11.5V14ZM5 12H6V10H5V12Z"></path>
</svg>
