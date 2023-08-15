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
class="remixicon ri-arrow-left-right-fill {customClass}"
{...$$restProps}
>
<path d="M16 16V12L21 17L16 22V18H4V16H16ZM8 2V5.999L20 6V8H8V12L3 7L8 2Z"></path>
</svg>
