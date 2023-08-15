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
class="remixicon ri-health-book-fill {customClass}"
{...$$restProps}
>
<path d="M20 2C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6C5.44772 22 5 21.5523 5 21V19H3V17H5V15H3V13H5V11H3V9H5V7H3V5H5V3C5 2.44772 5.44772 2 6 2H20ZM14 8H12V11H9V13H11.999L12 16H14L13.999 13H17V11H14V8Z"></path>
</svg>
