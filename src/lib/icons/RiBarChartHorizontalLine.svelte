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
class="remixicon ri-bar-chart-horizontal-line {customClass}"
{...$$restProps}
>
<path d="M12 3V5H3V3H12ZM16 19V21H3V19H16ZM22 11V13H3V11H22Z"></path>
</svg>
