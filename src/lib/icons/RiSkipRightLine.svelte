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
class="remixicon ri-skip-right-line {customClass}"
{...$$restProps}
>
<path d="M10.0858 12L5.29289 16.7929L6.70711 18.2071L12.9142 12L6.70711 5.79291L5.29289 7.20712L10.0858 12ZM17 6.00002L17 18H15L15 6.00002L17 6.00002Z"></path>
</svg>
