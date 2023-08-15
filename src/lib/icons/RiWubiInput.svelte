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
class="remixicon ri-wubi-input {customClass}"
{...$$restProps}
>
<path d="M3 21V19H6.662L7.896 12H5V10H8.249L9.13 5H4V3H20V5H11.161L10.279 10H18V19H21V21H3ZM16 12H9.927L8.692 19H16V12Z"></path>
</svg>
