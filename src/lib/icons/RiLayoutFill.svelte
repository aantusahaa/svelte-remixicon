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
class="remixicon ri-layout-fill {customClass}"
{...$$restProps}
>
<path d="M16 21V10H21V20C21 20.5523 20.5523 21 20 21H16ZM14 21H4C3.44772 21 3 20.5523 3 20V10H14V21ZM21 8H3V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V8Z"></path>
</svg>
