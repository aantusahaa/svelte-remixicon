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
class="remixicon ri-hexagon-fill {customClass}"
{...$$restProps}
>
<path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5Z"></path>
</svg>
