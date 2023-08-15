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
class="remixicon ri-corner-right-down-line {customClass}"
{...$$restProps}
>
<path d="M13.9999 5.00014L5.00003 5L5 7L11.9999 7.00011L12 17.1719L8.05027 13.2222L6.63606 14.6364L13 21.0004L19.364 14.6364L17.9498 13.2222L14 17.172L13.9999 5.00014Z"></path>
</svg>
