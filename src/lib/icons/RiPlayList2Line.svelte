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
class="remixicon ri-play-list-2-line {customClass}"
{...$$restProps}
>
<path d="M22 18V20H2V18H22ZM2 3.5L10 8.5L2 13.5V3.5ZM22 11V13H12V11H22ZM4 7.1085V9.8915L6.22641 8.5L4 7.1085ZM22 4V6H12V4H22Z"></path>
</svg>
