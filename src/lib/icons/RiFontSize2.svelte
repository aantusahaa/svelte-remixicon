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
class="remixicon ri-font-size-2 {customClass}"
{...$$restProps}
>
<path d="M10 6V21H8V6H2V4H16V6H10ZM18 14V21H16V14H13V12H21V14H18Z"></path>
</svg>
