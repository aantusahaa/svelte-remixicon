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
class="remixicon ri-bar-chart-horizontal-fill {customClass}"
{...$$restProps}
>
<path d="M12 3V7H3V3H12ZM16 17V21H3V17H16ZM22 10V14H3V10H22Z"></path>
</svg>
