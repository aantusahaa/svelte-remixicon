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
class="remixicon ri-pushpin-2-fill {customClass}"
{...$$restProps}
>
<path d="M18 3V5H17V11L19 14V16H13V23H11V16H5V14L7 11V5H6V3H18Z"></path>
</svg>
