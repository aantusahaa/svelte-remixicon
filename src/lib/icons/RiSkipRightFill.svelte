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
class="remixicon ri-skip-right-fill {customClass}"
{...$$restProps}
>
<path d="M17 6 17 18H15L15 6 17 6ZM13 12 7 18V6L13 12Z"></path>
</svg>
