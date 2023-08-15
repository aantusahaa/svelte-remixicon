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
class="remixicon ri-terminal-line {customClass}"
{...$$restProps}
>
<path d="M10.9999 11.9998L3.92886 19.0708L2.51465 17.6566L8.1715 11.9998L2.51465 6.34292L3.92886 4.92871L10.9999 11.9998ZM10.9999 18.9998H20.9999V20.9998H10.9999V18.9998Z"></path>
</svg>
