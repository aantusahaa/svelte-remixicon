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
class="remixicon ri-file-scan-line {customClass}"
{...$$restProps}
>
<path d="M5 20H19V15H21V20.9932C21 21.55 20.5554 21.9999 20.0068 22H3.99316C3.44482 21.9999 3 21.5555 3 21.0078V15H5V20ZM23 13H1V11H23V13ZM21 8V9H19L14 4H5V9H3V2.99219C3 2.45577 3.44857 2.00014 4.00195 2H14.9971L21 8Z"></path>
</svg>
