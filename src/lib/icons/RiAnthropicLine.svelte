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
class="remixicon ri-anthropic-line {customClass}"
{...$$restProps}
>
<path d="M14.1219 5H16.2678L22.1012 20H19.9553L14.1219 5ZM7.65986 5H10.3411L16.1103 20H13.9675L12.429 16H5.57192L4.03345 20H1.89062L7.65986 5ZM11.6598 14L9.00047 7.08577L6.34115 14H11.6598Z"></path>
</svg>
