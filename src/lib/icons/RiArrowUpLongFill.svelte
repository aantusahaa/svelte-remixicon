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
class="remixicon ri-arrow-up-long-fill {customClass}"
{...$$restProps}
>
<path d="M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z"></path>
</svg>
