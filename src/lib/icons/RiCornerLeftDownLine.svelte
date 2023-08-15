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
class="remixicon ri-corner-left-down-line {customClass}"
{...$$restProps}
>
<path d="M10.0003 5.00014L19.0002 5L19.0002 7L12.0003 7.00011L12.0002 17.1719L15.9499 13.2222L17.3642 14.6364L11.0002 21.0004L4.63623 14.6364L6.05044 13.2222L10.0002 17.172L10.0003 5.00014Z"></path>
</svg>
