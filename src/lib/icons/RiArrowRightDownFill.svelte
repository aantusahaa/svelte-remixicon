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
class="remixicon ri-arrow-right-down-fill {customClass}"
{...$$restProps}
>
<path d="M11.6363 13.0515L5.97949 7.39468L7.39371 5.98047L13.0506 11.6373L18.0003 6.68758V18.0013H6.6866L11.6363 13.0515Z"></path>
</svg>
