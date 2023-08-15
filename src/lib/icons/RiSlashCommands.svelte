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
class="remixicon ri-slash-commands {customClass}"
{...$$restProps}
>
<path d="M3 3H5V7H3V3ZM9.78839 21H7.66003L14.2115 3H16.3398L9.78839 21ZM21 3H19V7H21V3Z"></path>
</svg>
