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
class="remixicon ri-eth-line {customClass}"
{...$$restProps}
>
<path d="M8.1488 15.3042L12 20.5996L15.8513 15.3042L12 17.6742L8.1488 15.3042ZM17.1374 12.1643L12 3.81608L6.86261 12.1643L12 15.3258L17.1374 12.1643ZM4 13L12 0L20 13L12.0001 24L4 13Z"></path>
</svg>
