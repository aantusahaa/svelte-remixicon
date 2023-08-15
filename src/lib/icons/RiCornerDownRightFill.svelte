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
class="remixicon ri-corner-down-right-fill {customClass}"
{...$$restProps}
>
<path d="M5.00014 13.9999L5 5.00003L7 5L7.00011 11.9999L14.5862 12V6.58581L21.0004 13L14.5862 19.4142L14.5862 14L5.00014 13.9999Z"></path>
</svg>
