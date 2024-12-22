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
class="remixicon ri-corner-down-left-fill {customClass}"
{...$$restProps}
>
<path d="M19.0001 13.9999L19.0002 5.00003L17.0002 5L17.0001 11.9999L9.41406 12V6.58581L2.99986 13L9.41406 19.4142L9.41406 14L19.0001 13.9999Z"></path>
</svg>
