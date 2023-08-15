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
<path d="M19.0003 13.9999L19.0004 5.00003L17.0004 5L17.0003 11.9999L9.41421 12V6.58581L3 13L9.41421 19.4142L9.41421 14L19.0003 13.9999Z"></path>
</svg>
